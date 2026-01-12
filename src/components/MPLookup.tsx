import React, { useState } from 'react';
import { Search, Mail, AlertCircle, Loader2 } from 'lucide-react';

interface MP {
  name: string;
  email: string;
  district: string;
  party?: string;
}

const MPLookup: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');
  const [mp, setMp] = useState<MP | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const EMAIL_TEMPLATE = `Subject: Urgent Action Needed: Iran Crisis and Human Rights Violations

Dear [MP_NAME],

I am writing to you as your constituent regarding the ongoing humanitarian crisis and human rights violations in Iran.

Recent events have shown a continued pattern of state violence against peaceful protesters, arbitrary arrests, and suppression of fundamental freedoms. The situation demands immediate international attention and action from the Canadian government.

I urge you to:
1. Publicly condemn the human rights violations occurring in Iran
2. Call for accountability for those responsible for violence against civilians
3. Support efforts to impose targeted sanctions on Iranian officials involved in these abuses
4. Advocate for increased support for Iranian civil society and human rights defenders

As my representative in Parliament, I ask that you raise this critical issue and push for concrete action to support the Iranian people in their struggle for freedom and justice.

Thank you for your attention to this urgent matter.

Sincerely,
[Your Name]
[Your City/Town]
`;

  const searchMP = async () => {
    const query = searchInput.trim().toUpperCase().replace(/\s/g, '');

    if (!query) {
      setError('Please enter a postal code or municipality name');
      return;
    }

    setLoading(true);
    setError('');
    setMp(null);

    try {
      // Try postal code lookup via Represent API
      const postalCodePattern = /^[A-Z]\d[A-Z]\d[A-Z]\d$/;

      if (postalCodePattern.test(query)) {
        // It's a postal code
        const response = await fetch(
          `https://represent.opennorth.ca/postcodes/${query}/?sets=federal-electoral-districts`
        );

        if (!response.ok) {
          throw new Error('Unable to find MP for this postal code');
        }

        const data = await response.json();

        // Look for federal representatives
        const federalReps = data.representatives_centroid || data.representatives_concordance || [];
        const mpData = federalReps.find((rep: any) =>
          rep.elected_office === 'MP' || rep.elected_office === 'Member of Parliament'
        );

        if (!mpData) {
          throw new Error('No MP found for this postal code');
        }

        // Construct MP email (House of Commons standard format)
        // Format: firstname.lastname@parl.gc.ca
        const nameParts = mpData.name.split(' ');
        const firstName = nameParts[0].toLowerCase();
        const lastName = nameParts[nameParts.length - 1].toLowerCase();
        const email = `${firstName}.${lastName}@parl.gc.ca`;

        setMp({
          name: mpData.name,
          email: email,
          district: mpData.district_name,
          party: mpData.party_name
        });
      } else {
        // Municipality name search - show helpful message
        setError('For municipality search, please try using your postal code instead for best results. Postal codes provide accurate MP matching.');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error finding MP. Please check your postal code and try again.');
    } finally {
      setLoading(false);
    }
  };

  const createMailtoLink = () => {
    if (!mp) return '#';

    const subject = encodeURIComponent('Urgent Action Needed: Iran Crisis and Human Rights Violations');
    const body = encodeURIComponent(
      EMAIL_TEMPLATE
        .replace('[MP_NAME]', mp.name)
        .replace('[Your Name]', '')
        .replace('[Your City/Town]', '')
    );

    return `mailto:${mp.email}?subject=${subject}&body=${body}`;
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      searchMP();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Your MP About Iran
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Take action by emailing your Member of Parliament regarding the ongoing humanitarian crisis in Iran
          </p>
          <p className="text-sm text-gray-500">
            Enter your postal code to find your MP and send a pre-written message
          </p>
        </div>

        {/* Search Box */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="mb-6">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
              Your Postal Code (e.g., K1A 0A6)
            </label>
            <div className="relative">
              <input
                id="search"
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter postal code"
                className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg uppercase"
                disabled={loading}
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          <button
            onClick={searchMP}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Searching...
              </>
            ) : (
              <>
                <Search size={20} />
                Find My MP
              </>
            )}
          </button>

          {/* Error Message */}
          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          {/* MP Results */}
          {mp && (
            <div className="mt-6 p-6 bg-green-50 border-2 border-green-200 rounded-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Your Member of Parliament</h2>

              <div className="space-y-2 mb-6">
                <p className="text-gray-700">
                  <span className="font-semibold">Name:</span> {mp.name}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Constituency:</span> {mp.district}
                </p>
                {mp.party && (
                  <p className="text-gray-700">
                    <span className="font-semibold">Party:</span> {mp.party}
                  </p>
                )}
                <p className="text-gray-700">
                  <span className="font-semibold">Email:</span> {mp.email}
                </p>
              </div>

              <a
                href={createMailtoLink()}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 inline-flex"
              >
                <Mail size={20} />
                Email {mp.name.split(' ')[0]} About Iran
              </a>

              <p className="text-sm text-gray-600 mt-4">
                The email will open in your default email client with a pre-written message. You can edit it before sending.
              </p>
            </div>
          )}
        </div>

        {/* Information Box */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-3">Why Contact Your MP?</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">•</span>
              <span>Members of Parliament represent your voice in the Canadian government</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">•</span>
              <span>Your message helps raise awareness about human rights violations in Iran</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">•</span>
              <span>Collective action can lead to policy changes and international support</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">•</span>
              <span>Every email counts in demonstrating Canadian support for Iranian people</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MPLookup;

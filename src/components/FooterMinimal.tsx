import { useRouter } from 'next/router';
import { useState } from 'react';

export default function FooterMinimal({ allTags }: { allTags: any }) {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  // Handle form submission to the search page
  const handleSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to the search results page with the query as a query parameter
      await router.push(`/posts/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <footer className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-6 border-t border-gray-200 dark:border-neutral-700">
        <div className="flex flex-wrap justify-between items-center gap-2">
          <div>
            <p className="text-xs text-gray-600 dark:text-neutral-400">
              ©2024 Christina Branson
            </p>
          </div>

          <ul className="flex flex-wrap items-center">
            <li className="inline-block pe-4 text-xs">
              <a
                className="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
                href="/deep-track-ai/about/"
              >
                About
              </a>
            </li>

            <li className="inline-block pe-4 text-xs">
              <a
                className="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
                href="/deep-track-ai/tags/all"
              >
                Tags
              </a>
            </li>

            <li className="inline-block pe-4 text-xs">
              <a
                className="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
                href="https://github.com/christinabranson/deep-track-ai"
                target="_blank"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

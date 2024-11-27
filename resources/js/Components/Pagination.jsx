import React from 'react'
import { Link } from '@inertiajs/react'

export default function Pagination({ links }) {
  if (!links || links.length === 0) return null

  return (
    <nav className="flex justify-between mt-4 text-xs">
      {/* Previous Page */}
      {links[0]?.url && (
        <Link
          href={links[0].url}
          className="px-4 py-2 text-gray-600 border rounded"
        >
          Previous
        </Link>
      )}

      {/* Pagination Links */}
      <div className="flex space-x-2">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.url || ''}
            className={`px-4 py-2 border rounded ${
              link.active ? 'bg-cyan-700 text-white' : 'text-gray-600'
            }`}
            dangerouslySetInnerHTML={{ __html: link.label }}
          />
        ))}
      </div>

      {/* Next Page */}
      {links[links.length - 1]?.url && (
        <Link
          href={links[links.length - 1].url}
          className="px-4 py-2 text-gray-600 border rounded"
        >
          Next
        </Link>
      )}
    </nav>
  )
}

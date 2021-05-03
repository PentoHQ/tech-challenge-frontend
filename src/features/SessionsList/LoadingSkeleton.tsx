import ContentLoader from 'react-content-loader'

export default function LoadingSkeleton() {
  return (
    <ContentLoader
      width={400}
      height={200}
      viewBox="0 0 400 200"
      backgroundColor="#f0f1f5"
      foregroundColor="#dde0e9"
    >
      <rect x="16" y="24" rx="3" ry="3" width="128" height="13" />
      <rect x="16" y="48" rx="3" ry="3" width="64" height="12" />
      <rect x="16" y="88" rx="3" ry="3" width="128" height="13" />
      <rect x="16" y="112" rx="3" ry="3" width="64" height="12" />
      <rect x="16" y="152" rx="3" ry="3" width="128" height="13" />
      <rect x="16" y="176" rx="3" ry="3" width="64" height="12" />
    </ContentLoader>
  )
}

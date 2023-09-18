export default function UserWrapper({ loading, error, children }) {
  if (error)
    return <p className='h-full text-center'>Error: {error.message}</p>;
  if (loading) return <p className='h-full text-center'>Loading...</p>;
  return <>{children}</>;
}

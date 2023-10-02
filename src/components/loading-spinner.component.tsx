export default function LoadingSpinner() {
  return (
    <div className='flex flex-col items-center justify-center text-center'>
      <svg className='spinner h-10 w-10' x={0} y={0} viewBox='0 0 40 40'>
        <circle
          className='animate-loading'
          fill='transparent'
          stroke='#D8769E'
          strokeWidth={4}
          strokeLinecap='round'
          strokeDasharray={3.14 * 40}
          cx='20'
          cy='20'
          r='18'
        ></circle>
      </svg>
    </div>
  );
}

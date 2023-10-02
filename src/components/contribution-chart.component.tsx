import { ContributionObjType } from '@/utils/utils';

export default function ContributionChart({
  data,
}: {
  data: ContributionObjType[];
}) {
  const chartWidth = 1200;
  const chartHeight = 600;
  const offsetY = 40;
  const paddingX = 40;
  const paddingY = 90;
  const maxY = Math.max(...data.map((item) => item.contributionCount));
  const guides = [...Array(16).keys()];

  const properties = data.map((property, index) => {
    const { contributionCount, date } = property;
    const x = (index / data.length) * (chartWidth - paddingX) + paddingX / 1.25;
    const y =
      chartHeight -
      offsetY -
      (contributionCount / maxY) * (chartHeight - (paddingY + offsetY)) -
      paddingY +
      offsetY;
    return {
      total: contributionCount,
      date: date,
      x: x,
      y: y,
    };
  });

  const points = properties.map((point) => `${point.x},${point.y}`);

  return (
    <section className='rounded-lg border border-white/10 bg-lightPurple p-6 md:p-10'>
      <h3 className='gradient-text w-max text-xl font-medium'>
        Contribution Graph
      </h3>
      {data && (
        <svg
          className='animate-slideDown'
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          role='presentation'
        >
          <defs>
            <linearGradient id='linear' x1='0%' y1='0%' x2='0%' y2='100%'>
              <stop offset='0%' stopColor='#ff6c6c' />
              <stop offset='100%' stopColor='#8c8aff' />
            </linearGradient>
          </defs>
          {guides.map((_, index) => {
            const ratio = index / guides.length;
            const y = chartHeight - paddingY - chartHeight * ratio;

            return (
              <polyline
                key={index}
                className='stroke-white/10'
                fill='none'
                strokeWidth={1}
                points={`${paddingX / 10},${y} ${
                  chartWidth - paddingX / 10
                },${y}`}
              />
            );
          })}

          <polyline
            fill='none'
            stroke='url(#linear)'
            strokeWidth={2}
            points={points.toString()}
          />

          {properties.map((property, index) => {
            const { total, date, x, y } = property;

            return (
              <g key={index}>
                <circle
                  className='fill-lightPurple stroke-gray-600'
                  cx={x}
                  cy={y}
                  r={10}
                  strokeWidth={1}
                />
                <text
                  x={x}
                  y={y + 2.8}
                  textAnchor='middle'
                  fontSize={8}
                  className='select-none fill-[#bcbaff] font-bold'
                >
                  {total}
                </text>
                <g
                  transform={`translate(${x - 6} ${
                    chartHeight - (paddingY - offsetY)
                  })`}
                >
                  <text
                    transform='rotate(45)'
                    textAnchor='start'
                    fontSize={10}
                    className='select-none fill-zinc-400'
                  >
                    {new Date(date).toLocaleDateString(undefined, {
                      year: '2-digit',
                      month: 'numeric',
                      day: 'numeric',
                    })}
                  </text>
                </g>
              </g>
            );
          })}
        </svg>
      )}
    </section>
  );
}

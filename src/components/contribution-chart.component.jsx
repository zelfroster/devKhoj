import React from 'react';

export default function ContributionChart({ data }) {
  const chartWidth = 1200;
  const chartHeight = 600;
  const offsetY = 40;
  const paddingX = 40;
  const paddingY = 90;
  const maxY = Math.max(...data.map((item) => item.contributionCount));
  const guides = [...Array(16).keys()];

  const properties = data.map((property, index) => {
    const { contributionCount, date } = property;
    const x = (index / data.length) * (chartWidth - paddingX) + paddingX / 2;
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
          {guides.map((_, index) => {
            const ratio = index / guides.length;
            const y = chartHeight - paddingY - chartHeight * ratio;

            return (
              <polyline
                key={index}
                className='stroke-white/10'
                fill='none'
                strokeWidth={1}
                points={`${paddingX / 2},${y} ${
                  chartWidth - paddingX / 2
                },${y}`}
              />
            );
          })}

          <polyline
            fill='none'
            className='stroke-zinc-600'
            strokeWidth={2}
            points={points}
          />

          {properties.map((property, index) => {
            const { total, date, x, y } = property;

            return (
              <g key={index}>
                <circle
                  className='fill-black stroke-zinc-500'
                  cx={x}
                  cy={y}
                  r={12}
                  strokeWidth={2}
                />
                <text
                  x={x}
                  y={y + 2.8}
                  textAnchor='middle'
                  fontSize={8}
                  className='select-none fill-zinc-100 font-bold'
                >
                  {total}
                </text>

                <g
                  transform={`translate(${x} ${
                    chartHeight - (paddingY - offsetY)
                  })`}
                >
                  <text
                    transform='rotate(45)'
                    textAnchor='start'
                    fontSize={10}
                    className='select-none fill-zinc-100'
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

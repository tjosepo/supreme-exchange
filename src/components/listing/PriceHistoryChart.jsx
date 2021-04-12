import { Line } from 'react-chartjs-2';
import Card from '../shared/Card';

export default function PriceHistoryChart() {
  const years = ['', '', '', '2019', '', '', '', '', '2020', '', '', ''];

  return (
    <Card>
      <span className="label">
        Timeline
      </span>
      <div>
        <Line
          style={{width: '100%'}}
          data={canvas => {
            const ctx = canvas.getContext('2d');
            const gradient = ctx.createLinearGradient(0, 0, 0, 300);
            gradient.addColorStop(1, 'rgba(255,255,255,1)');
            gradient.addColorStop(0.3, 'rgba(211,255,216,1)');
            return {
              labels: years,
              datasets: [
                {
                  backgroundColor: gradient,
                  label: 'Price',
                  data: [120, 130, 140, 150, 160, 130, 135, 110, 90, 80, 75, 75],
                  borderColor: ['#81C788'],
                  borderWidth: 1,
                  lineTension: 0.2,
                  fill: true
                }
              ]
            };
          }}
          height={225}
          options={{
            tooltips: {
              enabled: false
            },
            legend: {
              display: false
            },
            maintainAspectRatio: false,
            responsive: true,
            title: {
              display: false
            },
            elements: {
              point: {
                radius: 0
              }
            },
            scales: {
              xAxes: [
                {
                  gridLines: {
                    color: 'rgba(0, 0, 0, 0)',
                    zeroLineColor: 'rgba(0, 0, 0, 0)'
                  }
                }
              ],
              yAxes: [
                {
                  gridLines: {
                    color: 'rgba(0, 0, 0, 0)'
                  },
                  display: true,
                  position: 'right',
                  ticks: {
                    beginAtZero: true,
                    stepSize: 50,
                    callback: (value, index, values) => {
                      return '$' + value.toFixed(0);
                    }
                  }
                }
              ]
            }
          }}
        />
      </div>
    </Card>
  );
}

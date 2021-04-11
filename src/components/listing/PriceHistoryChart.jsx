import React from 'react';
import { Line } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

const years = ['', '', '', '2019', '', '', '', '', '2020', '', '', ''];

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    marginTop: '5px',
    marginBottom: '5px',
    borderRadius: '0px'
  },
  content: {
    padding: '50px'
  },
  header: {
    textAlign: 'left',
    opacity: 0.7
  }
}));

export default function PriceHistoryChart() {
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      <CardHeader className={classes.header} title="Timeline" />
      <CardContent className={classes.content}>
        <Line
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
          height={350}
          width={600}
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
                    stepSize: 40,
                    callback: (value, index, values) => {
                      return '$' + value.toFixed(0);
                    }
                  }
                }
              ]
            }
          }}
        />
      </CardContent>
    </Card>
  );
}

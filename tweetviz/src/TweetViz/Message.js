import { csvFormat } from 'd3-dsv';

export const message = data => {
    let message = '';
    message += data.length + ' rows\n';
    message += data.columns.length + ' columns\n';
    message += Math.round(csvFormat(data).length/ 1024) + ' kB\n';
    console.log('creating msg')
    return message;
}
import { success, notFound } from '../../services/response/'
import { RaspService } from '.'
const Gpio = require('onoff').Gpio;
const led = new Gpio(17, 'out');



export const turnGPIO = ({ bodymen: { body } }, res, next) =>
  {
    
    led.writeSync(1);
  console.log("Enciende led")
    
  }
export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  RaspService.find(query, select, cursor)
    .then((raspServices) => raspServices.map((raspService) => raspService.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  RaspService.findById(params.id)
    .then(notFound(res))
    .then((raspService) => raspService ? raspService.view() : null)
    .then(success(res))
    .catch(next)

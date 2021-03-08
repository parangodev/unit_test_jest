import { TestScheduler } from 'jest'
import {sumar, multiplicar, restar, dividir} from '../maths'

describe('Calculos matematicos', () =>{
  test('Pruebas de sumas', () => {
    expect(sumar(1,1)).toBe(2)
  }) 
})
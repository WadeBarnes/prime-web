import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

const TIMING = "250ms";


export const openState = trigger('openState', [
  state('closed', style({
    overflow: 'hidden',
    height: '0',
  })),
  state('opened', style({
    overflow: 'hidden',
    height: '*',
  })),
  transition('closed => opened', animate(`${TIMING} ease-in`)),
  transition('opened => closed', animate(`${TIMING} ease-out`))
]);


export const openStateChild = trigger('openStateChild', [
    state('closed', style({
      transform: 'translateY(-100%)',
    })),
    state('opened', style({
      transform: 'translateY(0px)',
    })),
    transition('closed => opened', animate(`${TIMING} ease-in`)),
    transition('opened => closed', animate(`${TIMING} ease-out`))
  ]);

export const loadInOut = trigger('loadInOut', [
  transition('void => *', [
    animate(TIMING, keyframes([
      style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
      style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
      style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
    ]))
  ]),
  transition('* => void', [
    animate(TIMING, keyframes([
      style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
      style({opacity: 1, transform: 'translateX(-15px)', offset: 0.5}),
      style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
    ]))
  ])
])


export const growVertical = trigger('growVertical', [
  transition('void => *', [
    animate(TIMING, keyframes([
      style({height: '0', overflow: 'hidden'}),
      style({height: '*', overflow: 'hidden'}),
    ]))
  ]),
  transition('* => void', [
    animate(TIMING, keyframes([
      style({height: '*', overflow: 'hidden'}),
      style({height: '0', overflow: 'hidden'}),
    ]))
  ])
])

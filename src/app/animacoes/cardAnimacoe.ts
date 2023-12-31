import { animate, state, style, transition, trigger } from '@angular/animations';

export const animandoCard = trigger('estadoDestacado', [
  state('default', style({
    border: '2px solid #B2B6FF'
  })),
  state('destacado', style({
    border: '4px solid #B2B6FF',
    filter: 'brightness(92%)'
  })),
  transition('default => destacado', [
    animate('200ms ease-out', style({
      transform: 'scale(1.02)'
    })),
    animate(200)
  ]),

])

export  const shownStateTrigger = trigger(
  'shownState', [
    state('notShown', style({

    })),
    state('shown', style({

    })),

    transition('void => shown', [
      style({
        opacity: 0,
      }),
      animate(300, style({
        opacity: 1
      }))
    ]),

    transition('show => void', [
      animate(300, style({
        opactity: 0
      }))
    ])
  ]
);

export const cehckButtonTrigger = trigger('checkButton', [
  transition('* => checked', [
    animate('400ms ease-in', style({
      transform: 'scale(0.4)'
    }))
  ])
])

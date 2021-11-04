
import { style, trigger, transition, animate, query, keyframes } from '@angular/animations';

export const routerAnimations =
trigger('routerAnimations', [
    transition('* => *', [
        query(
            ':enter',
            [
                style({opacity: 0, pointerEvents: 'none'}),
            ],
            { optional: true }
            ),
        query(
            ':leave',
            [
                animate('1s ease-out', style({opacity: 0, height: '0px', pointerEvents: 'none'})),
            ],
            { optional: true }
            ),
        query(
            ':enter',
            [
                animate('1s ease-out', style({opacity: 1})),
            ],
            { optional: true }
            )
    ])
]);

export const fadeAnimations =
trigger(
  'fadeAnimations',
  [
    transition(
      ':enter',
      [
        style({ opacity: 0 }),
        animate('1s ease-out',
                style({ opacity: 1 }))
      ]
    ),
    transition(
      ':leave',
      [
        style({ opacity: 1 }),
        animate('1s ease-in',
                style({ opacity: 0 }))
      ]
    )
  ]
);
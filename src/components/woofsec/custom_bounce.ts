/* eslint-disable @typescript-eslint/no-explicit-any */
export const customBounce = (timeline: any, ballRef: any) => {
  //CUSTOM BOUNCE
  const coefficient = 0.8;
  for (let i = 1; i <= 4; i++) {
    //going up
    timeline.to(
      ballRef.current.position,
      {
        y: Math.pow(coefficient, i) * 1.5,
        duration: 0.2,
        ease: "power2.out",
      },
      ">"
    );

    //coming back down
    timeline.to(
      ballRef.current.position,
      {
        y: 0.5,
        duration: 0.2,
        ease: "power2.in",
      },
      ">"
    );
  }

  return timeline;
};

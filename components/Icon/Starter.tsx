import React from "react";
import { SVGProps } from "react";

export type TSVGElementProps = SVGProps<SVGSVGElement>;

const StarterIcon: React.FC<TSVGElementProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="807"
      height="807"
      viewBox="0 0 807 807"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M95.8224 571.398C94.943 609.511 93.6662 648.865 91.9922 689.461H254.661V573.08H392.201C452.596 573.08 499.986 565.586 534.371 550.598C568.756 535.168 592.782 514.008 606.448 487.117C620.114 459.785 626.946 426.723 626.946 387.929C626.946 331.502 609.754 287.859 575.369 257.001C540.983 225.702 479.928 210.052 392.201 210.052H254.661V209.391H91.9922C92.0303 210.315 92.0682 211.239 92.1059 212.162L132.759 356.968L280.336 398.399L132.759 439.83L95.8224 571.398Z"
        fill="currentColor"
      />
      <path
        d="M644.793 116.689L663.756 167.935L715.001 186.897L663.756 205.859L644.793 257.105L625.831 205.859L574.586 186.897L625.831 167.935L644.793 116.689Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default StarterIcon;

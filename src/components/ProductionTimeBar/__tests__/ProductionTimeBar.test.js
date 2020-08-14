import React from 'react';
import {render} from "@testing-library/react";

import ProductionTimeBar from "../ProductionTimeBar";

describe('ProductionTimeBar', () => {
   test('should match snapshot', () => {
      const { baseElement } = render(<ProductionTimeBar preparedTime={2} runningTime={2} totalTime={12} />);
      expect(baseElement).toMatchSnapshot();
   });
});

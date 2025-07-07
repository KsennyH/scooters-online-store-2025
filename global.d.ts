declare module '*.svg' {
  import * as React from 'react';
  const ReactComponent: React.FunctionComponent<
    React.SVGAttributes<SVGSVGElement> & { title?: string }
  >;
  export default ReactComponent;
}
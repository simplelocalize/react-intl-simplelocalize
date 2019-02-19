# react-intl-simplelocalize

> 

[![NPM](https://img.shields.io/npm/v/react-intl-simplelocalize.svg)](https://www.npmjs.com/package/react-intl-simplelocalize) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-intl-simplelocalize react-intl
```

or

```bash
yarn add react-intl-simplelocalize react-intl
```

## Configuration

- Setup account here: https://simplelocalize.io
- Create new ReactJS project.
- Copy project hash from settings tabs.
- Wrap your applications same as you do with redux `<Provider/>`.

```jsx
import SimpleLocalize from 'react-intl-simplelocalize'

const app = document.getElementById("root");

render(
  <SimpleLocalize hash="<PROJECT_HASH>">
      <App/>
  </SimpleLocalize>, app);
```

## Usage

Start using `<FormattedMessage />`components from `yahoo/react-intl`.

```jsx
import React from "react";
import {FormattedMessage} from "react-intl";

class Home extends React.Component {

  render() {
    return (<FormattedMessage id="hello" />);
  }

}

export default Footer;
```

That's all, all translations will be now loaded and injected automatically.

## License

MIT © [](https://github.com/)

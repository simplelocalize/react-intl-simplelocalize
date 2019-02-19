// @flow
import React, {Fragment} from "react";
import {addLocaleData, IntlProvider} from "react-intl";

type Props = {
  hash: string,
  snapshot: string,
  language: string,
  children: Array<any>
}

type State = {
  messages: any,
  language: string
}

class SimpleLocalize extends React.Component<Props, State> {

  static defaultProps = {
    snapshot: "_latest",
    language: "en"
  };

  constructor(props: Props) {
    super(props);
    const language = localStorage.getItem('lang') || props.language;
    this.state = {
      messages: undefined,
      language
    };
  }

  componentDidMount() {
    this.fetchMessages()
    .then((messages) => this.setState({messages}));
  }


  fetchMessages = () => {
    const {hash, snapshot} = this.props;

    if(!hash){
      throw Error("Please provide project hash!");
    }

    if(snapshot === "_latest"){
      console.warn("Using latest i18n data snapshot!");
    }

    const {language} = this.state;
    const messages = `https://cdn.simplelocalize.io/${hash}/${snapshot}/${language}`;
    return fetch(messages)
    .then((data) => data.json());
  };

  render() {
    const {children} = this.props;
    const {messages, language} = this.state;
    return (
      <Fragment>
        {messages &&
        <IntlProvider locale={language} messages={{...messages}}>
          {children}
        </IntlProvider>
        }
      </Fragment>
    )
  }
}

export default SimpleLocalize;

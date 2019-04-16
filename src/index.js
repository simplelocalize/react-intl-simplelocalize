// @flow
import React, {Fragment} from "react";
import {addLocaleData, IntlProvider} from "react-intl";

type Props = {
  projectToken: string,
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
    const {projectToken, snapshot} = this.props;

    if(!projectToken){
      throw Error("Please provide project token property!");
    }

    if(snapshot === "_latest"){
      console.warn("Using latest i18n data snapshot!");
    }

    const {language} = this.state;
    const messages = `https://cdn.simplelocalize.io/${projectToken}/${snapshot}/${language}`;
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

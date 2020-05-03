import React from "react";
import EditMessages from './EditMessages';
import Management from './Management';

const MESSAGES = 'mensagens';
const MANAGEMENT = 'gerenciamento';

const TABS = {
  [MANAGEMENT]: props => <Management />,
  [MESSAGES]: props => <EditMessages {...props} />,
};

const Tab = ({ active, setTab, tabName }) => (
  <li className={tabName === active ? "is-active" : ""} key={tabName}>
    <a onClick={() => setTab(tabName)}>{tabName.toUpperCase()}</a>
  </li>
);

const TabsList = (props) => {
  const [ activeTab, setTab ] = React.useState(MANAGEMENT);
  const [ shouldWarn, setShouldWarn ] = React.useState(false);
  const CurrentTab = TABS[activeTab];
  const onTabChange = (tab) => {
    let shouldChange = true;
    if (shouldWarn) {
      shouldChange = window.confirm('há alterações não salvas que serão perdidas. tem certeza que deseja mudar de aba?')
    }

    if (shouldChange) {
      setTab(tab);
      setShouldWarn(false);
    }
  }

  return (
    <div className="tablist">
      <div className="tabs is-centered">
        <ul>
          {Object.keys(TABS).map((tab) => (
            <Tab key={tab} active={activeTab} setTab={onTabChange} tabName={tab} />
          ))}
        </ul>
      </div>
      <div className="container">
        <CurrentTab
          shouldWarn={shouldWarn}
          setShouldWarn={setShouldWarn}
          setTab={setTab}
        />
      </div>
    </div>

  );
};

export default TabsList;
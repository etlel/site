import { InferGetStaticPropsType } from 'next';

import Layout from '../components/Layout';
import Content from '../components/Content';
import { IssuesList } from '../components/Issue';
import { Summary } from '../components/util';
import { ISSUES_URL } from '../lib/constants';
import { getIssues } from '../lib/data';
import Menu from '../components/Menu';

const TITLE = "Warnings and errors from all datasets";

export default function Issues({ issues }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout.Base title={TITLE} description={null} activeSection="documentation">
      <Content.Menu title={TITLE} jsonLink={ISSUES_URL} Menu={Menu.Documentation}>
        <Summary summary="Below is an overview of all parsing and processing issues that appeared while importing the data." />
        <IssuesList issues={issues} showDataset={true} />
      </Content.Menu>
    </Layout.Base >
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      issues: await getIssues()
    }
  }
}

import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xc91a77393b9df2E940e7dF6D8C3DE8C3f5793A64'
);

export default instance;

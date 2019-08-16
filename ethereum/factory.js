import web3 from './web3';
import CampaignFactory from './build/Campaignfactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x09e6fA4AE6f43c2F6EB190291aB35A7D3A2B3E39'
);

export default instance;

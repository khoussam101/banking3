
import {Configuration, PlaidApi, PlaidEnvironment} from 'plaid';

const configuration = new Configuration({
basePath: PlaidEnvironment.sandbox,
baseOptions:{
    headers: {
        'PLAID-CLIENTS-ID': process.env.PLAID_CLIENT_ID,
        'PLAID_SECRET': process.env.PLAID_SECRET,
    }
}

})
   
  


export default plaidClient = new PlaidApi(configuration);
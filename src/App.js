import './App.css';

export default function App() {
  return (

    <div>

      <span >Hello React</span>

      <crowdswap-swap-widget id="crowdswapWidget"
        config='{
        "fromTokenAddress":"0x8595F9dA7b868b1822194fAEd312235E43007b49",
        "fromChainId":56,
        "toTokenAddress":"0x514910771AF9Ca656af840dff83E8264EcF986CA",
        "toChainId":21,
        "theme":"light",
        "affiliateId": "YourAffiliateId"
      }'
      ></crowdswap-swap-widget>
    </div >
  );
}
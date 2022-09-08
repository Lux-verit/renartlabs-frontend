import { Principal } from '@dfinity/principal';
import { getNFTActor } from '@psychedelic/dab-js'
import { Actor, HttpAgent } from "@dfinity/agent"; 



const agent = new HttpAgent();
const getTokenDetails = async () => {
  const tokenIndex = 5;
  const canisterId = 'qcg3w-tyaaa-aaaah-qakea-cai';
  const standard = 'ICPunks';
  const NFTActor = getNFTActor({ canisterId, agent, standard });

  const details = await NFTActor.details(tokenIndex);
}
await getTokenDetails()
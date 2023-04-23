type Position = "Contract" | "Freelance" | "MySelf"
type Local = "Remote" | "Hybrid"

type IJob = {
  companyName: string;
  role: string;
  contractType: Position
  location: string;
  locationMethod: Local
  startedAt: string;
  endedAt?: string;
  description: string;

  // Calculed in frontEnd
  time?: string 
};

export default IJob;

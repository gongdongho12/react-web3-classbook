import axiosInstance from "api/AxiosInstance";

const getBalance = (address: string) => axiosInstance
  .get("/api/balance", {
    params: {
      walletAddress: address
    }
  })
  .then((res: any) => {
    const { data } = res;
    console.log("getBalance data", data);
    return data;
  });

const postAttend = (myAddress: string, myPassword: string, professorAddress: string) => {
  const walletaddress: any = {
    student: myAddress,
    professor: professorAddress,
  }
  return axiosInstance.get("/api/attend", {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    walletaddress,
    privateKey: myPassword
  })
    .then((res: any) => {
      const { data } = res;
      console.log("attend data", data);
      return data;
    });
}

const postSugang = (myAddress: string, myPassword: string, professorAddress: string) => {
  const walletaddress: any = {
    student: myAddress,
    professor: professorAddress,
  }
  return axiosInstance.get("/api/sugang", {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    walletaddress,
    privateKey: myPassword
  })
    .then((res: any) => {
      const { data } = res;
      console.log("sugang data", data);
      return data;
    });
}


export default {
  getBalance,
  postAttend,
  postSugang
};

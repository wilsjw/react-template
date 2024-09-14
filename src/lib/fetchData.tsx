import { useQuery } from "@tanstack/react-query";

interface Address {
  street: string;
  city: string;
  postcode: string;
  country: string;
}

interface ContactInfo {
  name: string;
  address: Address;
  phone: string;
  cellPhone: string;
  email: string;
}

interface QueryResults {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  homeAddress: Address;
  postalAddress: Address;
  phone: string;
  cellPhone: string;
  email: string;
  dateOfBirth: string;
  nationality: string;
  primaryNextOfKin: ContactInfo;
  secondaryNextOfKin: ContactInfo;
  avatar: string;
  dietaryInformation: string;
  medicalInformation: string;
}

const fetchData = (key: string, url: string): QueryResults | undefined => {
  const {data: data} = useQuery<QueryResults>({
    queryKey: [key],
    queryFn: () => fetch(url).then(res => res.json()),
  });

  return data;
};

export default fetchData;
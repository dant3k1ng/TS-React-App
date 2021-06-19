export interface ItemKeyValue {
    [key: string]: string;
}

export interface Information
{
    hourlyFee?: string;
    hourlyFeeNegociated?: boolean;
}

//

export interface UserData {
    expertise: ItemKeyValue;
    specialties: ItemKeyValue;
    admission: ItemKeyValue;
    counties: ItemKeyValue;
    //
    informations: Information;
    //
    services: ItemKeyValue;
}
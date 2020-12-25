export class fields {
    public farmer_id: number;
    public farmer_fname: string;
    public farmer_mname: string;
    public farmer_lname: string;
    public address: string;
    public contact: number;
}
export class farm {
    public farm_id: number;
    public area: number;
    public location: string;
    public irrigation_src: string;
    public farmer_id: number;
    public f_id: number;
}
export class login{
    public farmer_id: number;
}
export class login{
    public F_id: number;
}
export class fields {
    public F_id: number;
    public F_fname: string;
    public F_mname: string;
    public F_lname: string;
    public F_address: string;
    public F_phoneNo: number;
    public F_telephoneNo: number;
    public F_gender: string;
    public F_city: string;
    public F_password: string;
}
export class farm {
    public Farm_id: number;
    public F_id: number;
    public Farm_area: string;
    public Farm_location: string;
    public Farm_irrigation_source: string;
}
export class crop {
    public Crop_id: number;
    public F_id: number;
    public Crop_name: string;
    public Crop_quantity: string;
    public Farm_id: string;
}
export class warehouse {
    public Crop_id: number;
    public Warehouse_id: number;
    public Crop_name: string;
    public Crop_stored_quantity: string;
    public Total_capacity: string;
    public F_id: number;
}
export class crop_market {
    public Crop_market_id: number;
    public F_id: number; 
    public Warehouse_id: number; 
    public Crop_id: number; 
    public Crop_category:  string;
    public Market_name: string;
    public Market_district: string;
    public Market_unit: string;
    public Crop_quantity: string;
    public Crop_price: number;
    public Date_of_sold: Date;
    public crop_name: string;
}
export class labours {
    
    public L_id: number;
    public F_id: number; 
    public L_fname: string;
    public L_lname: string;
    public L_mname: string;
    public L_address: string;
    public L_phoneNo: string; 
    public L_telephoneNo: string; 
    public Work: string; 
    public Working_hours: number; 
    public Salary: number;
    public L_city: string;
    public CropId: number;
}
export class pesticides {
    public Pesticide_id: number;
    public F_id: number;
    public Fertilizer_id: number;
    public Seed_id: number;
    public Pesticide_name: string;
    public Pesticide_rate: number;
    public Pesticide_quantity: string;
    public Company_name: string;
    public Formulation: string;
}
export class fertilizers {
    public Fertilizer_id: number;
    public F_id: number;
    public Pesticide_id: number;
    public Seed_id: number;
    public Fertilizer_name: string;
    public Fertilizer_rate: number;
    public Fertilizer_quantity: string;
    public Crop_id: number;
    public Company_name: string;
    public Formulation: string;
}
export class seeds {
    public Seed_id: number;
    public F_id: number;
    public Pesticide_id: number;
    public Fertilizer_id: number;
    public Seed_name: string;
    public Seed_type: string;
    public Seed_category: string;
    public Seed_rate: number;
    public Seed_quantity: string;
    public Company_name: string;
}
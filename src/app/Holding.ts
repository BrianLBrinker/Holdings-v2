export interface RawHolding {
    AccountName: string;
    SecurityName: string;
    SecurityCUSIP: string;
    Quantity: string;
    FaceValue: string;
    MarketValue: string;
    UnrealizedGainLoss: string;
    EffectiveDate: string;
}

export interface Holding {
    AccountName: string;
    SecurityName: string;
    SecurityCUSIP: string;
    Quantity: number;
    FaceValue: number;
    MarketValue: number;
    UnrealizedGainLoss: number;
    EffectiveDate: string;
}
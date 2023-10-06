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

export interface Holding extends Omit<RawHolding, 'Quantity' | 'FaceValue' | 'MarketValue' | 'UnrealizedGainLoss'> {
    Quantity: number;
    FaceValue: number;
    MarketValue: number;
    UnrealizedGainLoss: number;
}
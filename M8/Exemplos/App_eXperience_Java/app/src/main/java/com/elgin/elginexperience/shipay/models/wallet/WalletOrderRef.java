package com.elgin.elginexperience.shipay.models.wallet;

import com.google.gson.annotations.SerializedName;

public class WalletOrderRef {
    @SerializedName("regexp")
    public String regexp;
    @SerializedName("type")
    public String type;
}

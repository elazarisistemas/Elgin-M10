package com.example.e1_elgin_kotlin.shipay.models.wallet

import com.google.gson.annotations.SerializedName

data class WalletTotal (
    @SerializedName("regexp")
    var regexp: String,

    @SerializedName("type")
    var type: String
)

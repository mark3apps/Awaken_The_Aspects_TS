/** @format */

import { Unit } from '../../../lib/w3ts/handles/unit'

export class Units {
  private static instance?: Units

  static getInstance() {
    if (!Units.instance) Units.instance = new Units()
    return Units.instance
  }

  /// AUTO DEFINE
  h003_0015: Unit
  e003_0058: Unit
  n001_0048: Unit
  h01X_0707: Unit
  n001_0049: Unit
  o001_0078: Unit
  h006_0074: Unit
  hlum_0128: Unit
  nmh1_0783: Unit
  h003_0007: Unit
  o001_0075: Unit
  hars_0293: Unit
  nntt_0135: Unit
  uabo_0493: Unit
  h006_0055: Unit
  n01A_0399: Unit
  h00E_0033: Unit
  eshy_0120: Unit
  nntt_0132: Unit
  hshy_0011: Unit
  hvlt_0406: Unit
  nmsc_0644: Unit
  eshy_0047: Unit
  h00E_0081: Unit
  hars_0303: Unit
  nheb_0036: Unit
  e003_0014: Unit
  nheb_0109: Unit
  n00K_0477: Unit
  nmsc_0450: Unit
  o00C_1019: Unit
  o00C_1018: Unit
  o00C_1021: Unit
  o00C_1009: Unit
  o00C_1011: Unit
  o00C_1020: Unit
  h014_0017: Unit
  hshy_0212: Unit
  n00K_0802: Unit
  hvlt_0207: Unit
  edob_0315: Unit
  hars_0355: Unit
  hars_0292: Unit
  h014_0158: Unit
  nmh1_0735: Unit
  h01S_0553: Unit
  nelb_0697: Unit
  u001_0097: Unit
  u001_0098: Unit
  ndh2_0359: Unit
  ndh2_0876: Unit
  edob_0304: Unit
  o00C_1008: Unit
  o00C_1005: Unit
  n00N_0769: Unit
  h002_0699: Unit
  n00N_0939: Unit
  nelb_0194: Unit
  uabo_0263: Unit
  h01X_0750: Unit
  h01S_0352: Unit
  hlum_0623: Unit
  n01A_0569: Unit

  private constructor() {
    this.h003_0015 = Unit.fromHandle(gg_unit_h003_0015)
    this.e003_0058 = Unit.fromHandle(gg_unit_e003_0058)
    this.n001_0048 = Unit.fromHandle(gg_unit_n001_0048)
    this.h01X_0707 = Unit.fromHandle(gg_unit_h01X_0707)
    this.n001_0049 = Unit.fromHandle(gg_unit_n001_0049)
    this.o001_0078 = Unit.fromHandle(gg_unit_o001_0078)
    this.h006_0074 = Unit.fromHandle(gg_unit_h006_0074)
    this.hlum_0128 = Unit.fromHandle(gg_unit_hlum_0128)
    this.nmh1_0783 = Unit.fromHandle(gg_unit_nmh1_0783)
    this.h003_0007 = Unit.fromHandle(gg_unit_h003_0007)
    this.o001_0075 = Unit.fromHandle(gg_unit_o001_0075)
    this.hars_0293 = Unit.fromHandle(gg_unit_hars_0293)
    this.nntt_0135 = Unit.fromHandle(gg_unit_nntt_0135)
    this.uabo_0493 = Unit.fromHandle(gg_unit_uabo_0493)
    this.h006_0055 = Unit.fromHandle(gg_unit_h006_0055)
    this.n01A_0399 = Unit.fromHandle(gg_unit_n01A_0399)
    this.h00E_0033 = Unit.fromHandle(gg_unit_h00E_0033)
    this.eshy_0120 = Unit.fromHandle(gg_unit_eshy_0120)
    this.nntt_0132 = Unit.fromHandle(gg_unit_nntt_0132)
    this.hshy_0011 = Unit.fromHandle(gg_unit_hshy_0011)
    this.hvlt_0406 = Unit.fromHandle(gg_unit_hvlt_0406)
    this.nmsc_0644 = Unit.fromHandle(gg_unit_nmsc_0644)
    this.eshy_0047 = Unit.fromHandle(gg_unit_eshy_0047)
    this.h00E_0081 = Unit.fromHandle(gg_unit_h00E_0081)
    this.hars_0303 = Unit.fromHandle(gg_unit_hars_0303)
    this.nheb_0036 = Unit.fromHandle(gg_unit_nheb_0036)
    this.e003_0014 = Unit.fromHandle(gg_unit_e003_0014)
    this.nheb_0109 = Unit.fromHandle(gg_unit_nheb_0109)
    this.n00K_0477 = Unit.fromHandle(gg_unit_n00K_0477)
    this.nmsc_0450 = Unit.fromHandle(gg_unit_nmsc_0450)
    this.o00C_1019 = Unit.fromHandle(gg_unit_o00C_1019)
    this.o00C_1018 = Unit.fromHandle(gg_unit_o00C_1018)
    this.o00C_1021 = Unit.fromHandle(gg_unit_o00C_1021)
    this.o00C_1009 = Unit.fromHandle(gg_unit_o00C_1009)
    this.o00C_1011 = Unit.fromHandle(gg_unit_o00C_1011)
    this.o00C_1020 = Unit.fromHandle(gg_unit_o00C_1020)
    this.h014_0017 = Unit.fromHandle(gg_unit_h014_0017)
    this.hshy_0212 = Unit.fromHandle(gg_unit_hshy_0212)
    this.n00K_0802 = Unit.fromHandle(gg_unit_n00K_0802)
    this.hvlt_0207 = Unit.fromHandle(gg_unit_hvlt_0207)
    this.edob_0315 = Unit.fromHandle(gg_unit_edob_0315)
    this.hars_0355 = Unit.fromHandle(gg_unit_hars_0355)
    this.hars_0292 = Unit.fromHandle(gg_unit_hars_0292)
    this.h014_0158 = Unit.fromHandle(gg_unit_h014_0158)
    this.nmh1_0735 = Unit.fromHandle(gg_unit_nmh1_0735)
    this.h01S_0553 = Unit.fromHandle(gg_unit_h01S_0553)
    this.nelb_0697 = Unit.fromHandle(gg_unit_nelb_0697)
    this.u001_0097 = Unit.fromHandle(gg_unit_u001_0097)
    this.u001_0098 = Unit.fromHandle(gg_unit_u001_0098)
    this.ndh2_0359 = Unit.fromHandle(gg_unit_ndh2_0359)
    this.ndh2_0876 = Unit.fromHandle(gg_unit_ndh2_0876)
    this.edob_0304 = Unit.fromHandle(gg_unit_edob_0304)
    this.o00C_1008 = Unit.fromHandle(gg_unit_o00C_1008)
    this.o00C_1005 = Unit.fromHandle(gg_unit_o00C_1005)
    this.n00N_0769 = Unit.fromHandle(gg_unit_n00N_0769)
    this.h002_0699 = Unit.fromHandle(gg_unit_h002_0699)
    this.n00N_0939 = Unit.fromHandle(gg_unit_n00N_0939)
    this.nelb_0194 = Unit.fromHandle(gg_unit_nelb_0194)
    this.uabo_0263 = Unit.fromHandle(gg_unit_uabo_0263)
    this.h01X_0750 = Unit.fromHandle(gg_unit_h01X_0750)
    this.h01S_0352 = Unit.fromHandle(gg_unit_h01S_0352)
    this.hlum_0623 = Unit.fromHandle(gg_unit_hlum_0623)
    this.n01A_0569 = Unit.fromHandle(gg_unit_n01A_0569)
  }
  /// AUTO DEFINE
}

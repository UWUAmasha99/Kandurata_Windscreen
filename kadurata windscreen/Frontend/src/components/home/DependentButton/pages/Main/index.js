import React, { Component } from "react";

import { Container } from "../../components/container";
import { Section } from "../../components/section";
import Select from "../../components/select";

// styled components
//

class Main extends Component {
  state = {
    source: {
      country: [
        {
          id: 1,
          name: "Toyota"
        },
        {
          id: 2,
          name: "Nisan"
        },
        {
          id: 3,
          name: "Suzuki"
        },
        {
          id: 4,
          name: "Mazda"
        },
        {
          id: 5,
          name: "Izusu"
        },
        {
          id: 6,
          name: "Mitsubishi"
        },
        {
          id: 7,
          name: "TATA"
        },
        {
          id: 8,
          name: "Mahindra"
        },
        {
          id: 9,
          name: "Honda"
        },
      ],
      state: [
        {
          id: 1,
          name: "Car",
          country: 1
        },
        {
          id: 2,
          name: "Van",
          country: 1
        },
        {
          id: 3,
          name: "Lory",
          country: 1
        },
        {
          id: 4,
          name: "Bus",
          country: 1
        },
        {
          id: 5,
          name: "Car",
          country: 2
        },
        {
          id: 6,
          name: "Van",
          country: 2
        },
        {
          id: 7,
          name: "Lory",
          country: 2
        },
        {
          id: 8,
          name: "Bus",
          country: 2
        },
        {
          id: 9,
          name: "Car",
          country: 3
        },
        {
          id: 10,
          name: "Van",
          country: 3
        },
        {
          id: 11,
          name: "Lory",
          country: 3
        },
        {
          id: 12,
          name: "Car",
          country: 4
        },
        {
          id: 13,
          name: "Van",
          country: 4
        },
        {
          id: 14,
          name: "Lory",
          country: 4
        },
        {
          id: 15,
          name: "Car",
          country: 5
        },
        {
          id: 16,
          name: "Van",
          country: 5
        },
        {
          id: 17,
          name: "Lory",
          country: 5
        },
        {
          id: 18,
          name: "Bus",
          country: 5
        },
        {
          id: 19,
          name: "Car",
          country: 6
        },
        {
          id: 20,
          name: "van",
          country: 6
        },
        {
          id: 21,
          name: "Lory",
          country: 6
        },
        {
          id: 22,
          name: "Bus",
          country: 6
        },
        {
          id: 23,
          name: "Car",
          country: 7
        },
        {
          id: 24,
          name: "Van",
          country: 7
        },
        {
          id: 25,
          name: "Lory",
          country: 7
        },
        {
          id: 26,
          name: "Bus",
          country: 7
        },
        {
          id: 27,
          name: "Car",
          country: 8
        },
        {
          id: 28,
          name: "Picup",
          country: 8
        },
        {
          id: 29,
          name: "Lory",
          country: 8
        },
        {
          id: 30,
          name: "Car",
          country: 9
        },
        {
          id: 31,
          name: "Lory",
          country: 9
        },
        {
          id: 32,
          name: "van",
          country: 9
        }
      ],
      city: [
        {
          id: 1,
          name: "Axio  (TC001)",
          state: 1
        },
        {
          id: 2,
          name: "Aqua  (TC002)",
          state: 1
        },
        {
          id: 3,
          name: "Prius  (TC003)",
          state: 1
        },
        {
          id: 4,
          name: "Allion  (TC004)",
          state: 1
        },
        {
          id: 5,
          name: "Vitz  (TC005)",
          state: 1
        },
        {
          id: 6,
          name: "KDH  (TV001)",
          state: 2
        },
        {
          id: 7,
          name: "LH113  (TV002)",
          state: 2
        },
        {
          id: 8,
          name: "LH50  (TV003)",
          state: 2
        },
        {
          id: 9,
          name: "LH30  (TV004)",
          state: 2
        },
        {
          id: 10,
          name: "Dayana  (TL001)",
          state: 3
        },
        {
          id: 11,
          name: "Townace  (TL002)",
          state: 3
        },
        {
          id: 12,
          name: "Liteace  (TL003)",
          state: 3
        },
        {
          id: 13,
          name: "coster  (TB001)",
          state: 4
        },
        {
          id: 14,
          name: "Leaf  (NC001)",
          state: 5
        },
        {
          id: 15,
          name: "ADvagon  (NC002)",
          state: 5
        },
        {
          id: 16,
          name: "N17  (NC003)",
          state: 5
        },
        {
          id: 17,
          name: "K11  (NC004)",
          state: 5
        },
        {
          id: 18,
          name: "N16  (NC005)",
          state: 5
        },
        {
          id: 19,
          name: "E25  (NV001)",
          state: 6
        },
        {
          id: 20,
          name: "E24  (NV002)",
          state: 6
        },
        {
          id: 21,
          name: "VRG  (NV003)",
          state: 6
        },
        {
          id: 22,
          name: "Cliper  (NV005)",
          state: 6
        },
        {
          id: 23,
          name: "vanet  (NV006)",
          state: 6
        },
        {
          id: 24,
          name: "Atles  (NL001)",
          state: 7
        },
        {
          id: 25,
          name: "UD  (NL002)",
          state: 7
        },
        {
          id: 26,
          name: "Civilion  (NB001)",
          state: 8
        },
        {
          id: 27,
          name: "UD  (NB002)",
          state: 8
        },
        {
          id: 28,
          name: "Swift  (SC001)",
          state: 9
        },
        {
          id: 29,
          name: "Alto  (SC002)",
          state: 9
        },
        {
          id: 30,
          name: "Maruti  (SC003)",
          state: 9
        },
        {
          id: 31,
          name: "WaganR  (SC004)",
          state: 9
        },
        {
          id: 32,
          name: "cultus  (SC005)",
          state: 9
        },
        {
          id: 33,
          name: "DA64  (SV001)",
          state: 10
        },
        {
          id: 34,
          name: "DA17  (SV002)",
          state: 10
        },
        {
          id: 35,
          name: "DA63  (SV003)",
          state: 11
        },
        {
          id: 36,
          name: "Carry  (SL001)",
          state: 11
        },
        {
          id: 37,
          name: "Every  (SL002)",
          state: 11
        },
        {
          id: 38,
          name: "Familiya  (MC001)",
          state: 12
        },
        {
          id: 39,
          name: "Demio  (MC002)",
          state: 12
        },
        {
          id: 40,
          name: "BJ10  (MC003)",
          state: 12
        },
        {
          id: 41,
          name: "Axela  (MC004)",
          state: 12
        },
        {
          id: 42,
          name: "Bongo  (MV001)",
          state: 13
        },
        {
          id: 43,
          name: "Brawny  (MV002)",
          state: 13
        },
        {
          id: 44,
          name: "Scrum  (MV003)",
          state: 13
        },
        {
          id: 45,
          name: "Titan  (ML001)",
          state: 14
        },
        {
          id: 46,
          name: "Bongo  (ML002)",
          state: 14
        },
        {
          id: 47,
          name: "Brawny  (ML003)",
          state: 14
        },
        {
          id: 48,
          name: "Atlanta  (NV007)",
          state: 6
        },
        {
          id: 49,
          name: "Gemini  (IC001)",
          state: 15
        },
        {
          id: 50,
          name: "Fargo  (IV001)",
          state: 16
        },
        {
          id: 51,
          name: "RoodVan  (IV002)",
          state: 16
        },
        {
          id: 52,
          name: "NKR  (IL001)",
          state: 17
        },
        {
          id: 53,
          name: "ELF  (IL002)",
          state: 17
        },
        {
          id: 54,
          name: "NPR  (IL003)",
          state: 17
        },
        {
          id: 55,
          name: "journey  (IB001)",
          state: 18
        },
        {
          id: 56,
          name: "Journey K  (IB002)",
          state: 18
        },
        {
          id: 57,
          name: "Lancer Box  (MIC01)",
          state: 19
        },
        {
          id: 58,
          name: "Vagon  (MIC02)",
          state: 19
        },
        {
          id: 59,
          name: "CS1  (MIC03)",
          state: 19
        },
        {
          id: 60,
          name: "CK2A  (MIC04)",
          state: 19
        },
        {
          id: 61,
          name: "Minicab  (MIV01)",
          state: 20
        },
        {
          id: 62,
          name: "Delica  (MIV02)",
          state: 20
        },
        {
          id: 63,
          name: "PO5  (MIV030",
          state: 20
        },
        {
          id: 64,
          name: "Canter  (MIL01)",
          state: 21
        },
        {
          id: 65,
          name: "Fuso  (MIL02)",
          state: 21
        },
        {
          id: 66,
          name: "U61  (MIL03)",
          state: 21
        },
        {
          id: 67,
          name: "Rosa  (MIB01)",
          state: 22
        },
        {
          id: 68,
          name: "Fuso  (MIB02)",
          state: 22
        },
        {
          id: 69,
          name: "Indigo  (TAC01)",
          state: 23
        },
        {
          id: 70,
          name: "Nano  (TAC02)",
          state: 23
        },
        {
          id: 71,
          name: "Winger  (TAV01)",
          state: 24
        },
        {
          id: 72,
          name: "Dimo Batta  (TAL01)",
          state: 25
        },
        {
          id: 73,
          name: "Dimo Lokka  (TAL02)",
          state: 25
        },
        {
          id: 74,
          name: "LPK1615  (TAL03)",
          state: 25
        },
        {
          id: 75,
          name: "Macopolo  (TAB01)",
          state: 26
        },
        {
          id: 76,
          name: "909  (TAB02)",
          state: 26
        },
        {
          id: 77,
          name: "1510  (TAB03)",
          state: 26
        },
        {
          id: 78,
          name: "1512  (TAB04)",
          state: 26
        },
        {
          id: 79,
          name: "Atlanta  (MAC01)",
          state: 27
        },
        {
          id: 80,
          name: "Bolero  (MAP01)",
          state: 28
        },
        {
          id: 81,
          name: "Imperio  (MAP02)",
          state: 28
        },
        {
          id: 82,
          name: "Zomo  (MAP03)",
          state: 28
        },
        {
          id: 83,
          name: " ",
          state: 6
        },
        {
          id: 84,
          name: "Jeeto  (MAL01)",
          state: 29
        },
        {
          id: 85,
          name: "Maxximo  (MAL02)",
          state: 29
        },
        {
          id: 86,
          name: "Optimo  (MAL03)",
          state: 29
        },
        {
          id: 87,
          name: "GP5  (HC001)",
          state: 30
        },
        {
          id: 88,
          name: "Grace  (HC002)",
          state: 30
        },
        {
          id: 89,
          name: "Vezel  (HC003)",
          state: 30
        },
        {
          id: 90,
          name: "FIT  (HC004)",
          state: 30
        },
        {
          id: 91,
          name: "Acty  (HV001)",
          state: 31
        },
        {
          id: 92,
          name: "Acty  (HL001)",
          state: 32
        },
       
      ]
    },

    country: [],
    state: [],
    city: [],
    

    sourceMap: {
      country: 0,
      state: 1,
      city: 2,
      
    }
  };

  componentDidMount = () => {
    const { country } = this.state.source;
    this.setState({
      country
    });
  };

  handleChange = params => ev => {
    const target = ev.currentTarget;
    const { value } = target;
    const { current, next } = params;
    this.setNewValues({ value, current, next });
  };

  setNewValues = ({ value, current, next }) => {
    const { source } = this.state;
    const data = source[next];

    if (data) {
      this.setState({
        [next]: data.filter(el => el[current] === Number(value))
      });
    }

    this.clearValues(next);
  };

  clearValues = next => {
    const { sourceMap } = this.state;
    const nextkey = sourceMap[next];

    Object.entries(sourceMap)
      .filter(([_, value]) => value > nextkey)
      .forEach(([key]) => {
        this.setState({
          [key]: []
        });
      });
  };

  render() {
    const { country, state, city } = this.state;
    return (
      <Container style={{backgroundColor:"#89CFF0"}}>
        
        <Section>
          <Select
            data={country}
            action={this.handleChange}
            current="country"
            next="state"
          />
          <Select
            data={state}
            action={this.handleChange}
            current="state"
            next="city"
          />
          
          <Select data={city} />
        </Section>
      </Container>
    );
  }
}

export default Main;

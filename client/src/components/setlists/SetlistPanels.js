import React from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from './styles/SetlistPageStyles';
import { setlistDate } from '../../utils/dateTime';
import SetlistCard from './SetlistCard';


const setlists = [
  {
    id: '3b9e3020',
    versionId: 'b0765b6',
    eventDate: '21-07-2019',
    lastUpdated: '2019-07-25T17:12:48.000+0000',
    artist: {
      mbid: '437a0e49-c6ae-42f6-a6c1-84f25ed366bc',
      tmid: 1195873,
      name: 'Bon Iver',
      sortName: 'Bon Iver',
      disambiguation: '',
      url: 'https://www.setlist.fm/setlists/bon-iver-43d66f83.html',
    },
    venue: {
      id: '3d625c7',
      name: 'Ferropolis',
      city: {
        id: '2918321',
        name: 'Gräfenhainichen',
        state: 'Saxony-Anhalt',
        stateCode: '14',
        coords: {
          lat: 51.7333333,
          long: 12.45,
        },
        country: {
          code: 'DE',
          name: 'Germany',
        },
      },
      url: 'https://www.setlist.fm/venue/ferropolis-grafenhainichen-germany-3d625c7.html',
    },
    tour: {
      name: '22, A Million',
    },
    sets: {
      set: [
        {
          song: [
            {
              name: 'Perth',
            },
            {
              name: '10 d E A T h b R E a s T',
            },
            {
              name: '715 - CREEKS',
            },
            {
              name: '666 ʇ',
            },
            {
              name: 'Heavenly Father',
            },
            {
              name: 'Blood Bank',
            },
            {
              name: '21 M♢♢N WATER',
            },
            {
              name: '8 (circle)',
            },
            {
              name: 'Creature Fear',
            },
            {
              name: 'Skinny Love',
            },
            {
              name: 'Woods',
            },
            {
              name: 'Minnesota, WI',
            },
            {
              name: 'Holocene',
            },
            {
              name: 'Hey, Ma',
            },
            {
              name: '33 “GOD”',
            },
            {
              name: 'The Wolves (Act I and II)',
            },
            {
              name: '22 (OVER S&infin;&infin;N)',
            },
          ],
        },
      ],
    },
    url: 'https://www.setlist.fm/setlist/bon-iver/2019/ferropolis-grafenhainichen-germany-3b9e3020.html',
  },
  {
    id: '139ec565',
    versionId: '307858b',
    eventDate: '19-07-2019',
    lastUpdated: '2019-07-20T08:13:05.000+0000',
    artist: {
      mbid: '437a0e49-c6ae-42f6-a6c1-84f25ed366bc',
      tmid: 1195873,
      name: 'Bon Iver',
      sortName: 'Bon Iver',
      disambiguation: '',
      url: 'https://www.setlist.fm/setlists/bon-iver-43d66f83.html',
    },
    venue: {
      id: '13d50901',
      name: 'Kulturpark',
      city: {
        id: '2809346',
        name: 'Wiesbaden',
        state: 'Hesse',
        stateCode: '05',
        coords: {
          lat: 50.0833333,
          long: 8.25,
        },
        country: {
          code: 'DE',
          name: 'Germany',
        },
      },
      url: 'https://www.setlist.fm/venue/kulturpark-wiesbaden-germany-13d50901.html',
    },
    tour: {
      name: '22, A Million',
    },
    sets: {
      set: [
        {
          name: 'Set 1',
          song: [
            {
              name: '666 ʇ',
            },
            {
              name: '10 d E A T h b R E a s T',
            },
            {
              name: '715 - CREEKS',
            },
            {
              name: 'Heavenly Father',
            },
            {
              name: 'Towers',
            },
            {
              name: 'Michicant',
            },
            {
              name: '8 (circle)',
            },
            {
              name: 'Blood Bank',
            },
            {
              name: 'Flume',
            },
            {
              name: 'Hey, Ma',
            },
            {
              name: 'Perth',
            },
          ],
        },
        {
          name: 'Set 2',
          song: [
            {
              name: 'Skinny Love',
              info: 'Justin Vernon solo',
            },
            {
              name: 'Minnesota, WI',
            },
            {
              name: 'Holocene',
            },
            {
              name: '____45_____',
            },
            {
              name: 'Creature Fear',
            },
            {
              name: '33 “GOD”',
            },
            {
              name: '29 #Strafford APTS',
            },
            {
              name: 'The Wolves (Act I and II)',
            },
            {
              name: 'For Emma',
            },
          ],
        },
        {
          encore: 1,
          name: 'Set 2',
          song: [
            {
              name: '22 (OVER S&infin;&infin;N)',
            },
          ],
        },
      ],
    },
    url: 'https://www.setlist.fm/setlist/bon-iver/2019/kulturpark-wiesbaden-germany-139ec565.html',
  },
  {
    id: 'b9ec566',
    versionId: '6b07ae36',
    eventDate: '17-07-2019',
    lastUpdated: '2019-07-18T18:19:38.000+0000',
    artist: {
      mbid: '437a0e49-c6ae-42f6-a6c1-84f25ed366bc',
      tmid: 1195873,
      name: 'Bon Iver',
      sortName: 'Bon Iver',
      disambiguation: '',
      url: 'https://www.setlist.fm/setlists/bon-iver-43d66f83.html',
    },
    venue: {
      id: '7bd65efc',
      name: 'Castello Scaligero',
      city: {
        id: '3164241',
        name: 'Villafranca di Verona',
        state: 'Veneto',
        stateCode: '20',
        coords: {
          lat: 45.352383,
          long: 10.840186,
        },
        country: {
          code: 'IT',
          name: 'Italy',
        },
      },
      url: 'https://www.setlist.fm/venue/castello-scaligero-villafranca-di-verona-italy-7bd65efc.html',
    },
    tour: {
      name: '22, A Million',
    },
    sets: {
      set: [
        {
          name: 'Set 1',
          song: [
            {
              name: 'Perth',
            },
            {
              name: '666 ʇ',
            },
            {
              name: 'Heavenly Father',
            },
            {
              name: 'Towers',
            },
            {
              name: 'Blood Bank',
            },
            {
              name: '____45_____',
            },
            {
              name: '10 d E A T h b R E a s T',
            },
            {
              name: '715 - CREEKS',
            },
            {
              name: '29 #Strafford APTS',
            },
            {
              name: 'Calgary',
            },
            {
              name: 'Creature Fear',
            },
          ],
        },
        {
          name: 'Set 2',
          song: [
            {
              name: 'Skinny Love',
              info: 'Justin Vernon solo',
            },
            {
              name: 'Minnesota, WI',
            },
            {
              name: 'Flume',
            },
            {
              name: 'Hey, Ma',
            },
            {
              name: '33 “GOD”',
            },
            {
              name: '8 (circle)',
            },
            {
              name: 'Holocene',
            },
            {
              name: 'The Wolves (Act I and II)',
            },
            {
              name: 'For Emma',
            },
          ],
        },
        {
          encore: 1,
          name: 'Set 2',
          song: [
            {
              name: '22 (OVER S&infin;&infin;N)',
            },
          ],
        },
      ],
    },
    url: 'https://www.setlist.fm/setlist/bon-iver/2019/castello-scaligero-villafranca-di-verona-italy-b9ec566.html',
  },
  {
    id: '4b9ee3f2',
    versionId: '7b064e64',
    eventDate: '16-07-2019',
    lastUpdated: '2019-07-17T08:15:17.000+0000',
    artist: {
      mbid: '437a0e49-c6ae-42f6-a6c1-84f25ed366bc',
      tmid: 1195873,
      name: 'Bon Iver',
      sortName: 'Bon Iver',
      disambiguation: '',
      url: 'https://www.setlist.fm/setlists/bon-iver-43d66f83.html',
    },
    venue: {
      id: '43d4c307',
      name: 'Théâtre Antique de Fourvière',
      city: {
        id: '2996944',
        name: 'Lyon',
        state: 'Rhône-Alpes',
        stateCode: 'B9',
        coords: {
          lat: 45.75,
          long: 4.85,
        },
        country: {
          code: 'FR',
          name: 'France',
        },
      },
      url: 'https://www.setlist.fm/venue/theatre-antique-de-fourviere-lyon-france-43d4c307.html',
    },
    tour: {
      name: '22, A Million',
    },
    sets: {
      set: [
        {
          name: 'Set 1',
          song: [
            {
              name: '22 (OVER S&infin;&infin;N)',
            },
            {
              name: '10 d E A T h b R E a s T',
            },
            {
              name: '715 - CREEKS',
            },
            {
              name: '666 ʇ',
            },
            {
              name: 'Towers',
            },
            {
              name: 'Blood Bank',
            },
            {
              name: '29 #Strafford APTS',
            },
            {
              name: 'Creature Fear',
            },
            {
              name: 'Heavenly Father',
            },
            {
              name: 'Calgary',
            },
            {
              name: 'Holocene',
            },
          ],
        },
        {
          name: 'Set 2',
          song: [
            {
              name: 'Woods',
            },
            {
              name: 'Perth',
            },
            {
              name: 'Minnesota, WI',
            },
            {
              name: 'Flume',
            },
            {
              name: 'Hey, Ma',
            },
            {
              name: 'Skinny Love',
            },
            {
              name: '____45_____',
            },
            {
              name: '8 (circle)',
            },
            {
              name: '33 “GOD”',
            },
            {
              name: 'The Wolves (Act I and II)',
            },
          ],
        },
        {
          encore: 1,
          name: 'Set 2',
          song: [
            {
              name: 'For Emma',
            },
          ],
        },
      ],
    },
    url: 'https://www.setlist.fm/setlist/bon-iver/2019/theatre-antique-de-fourviere-lyon-france-4b9ee3f2.html',
  },
  {
    id: '139efd5d',
    versionId: '63061abf',
    eventDate: '13-07-2019',
    lastUpdated: '2019-07-14T12:40:07.000+0000',
    artist: {
      mbid: '437a0e49-c6ae-42f6-a6c1-84f25ed366bc',
      tmid: 1195873,
      name: 'Bon Iver',
      sortName: 'Bon Iver',
      disambiguation: '',
      url: 'https://www.setlist.fm/setlists/bon-iver-43d66f83.html',
    },
    venue: {
      id: '3bd62c48',
      name: 'Passeio Marítimo de Algés',
      city: {
        id: '2265464',
        name: 'Oeiras',
        state: 'Lisbon',
        stateCode: '14',
        coords: {
          lat: 38.6833333,
          long: -9.3166667,
        },
        country: {
          code: 'PT',
          name: 'Portugal',
        },
      },
      url: 'https://www.setlist.fm/venue/passeio-maritimo-de-alges-oeiras-portugal-3bd62c48.html',
    },
    tour: {
      name: '22, A Million',
    },
    sets: {
      set: [
        {
          song: [
            {
              name: 'Perth',
            },
            {
              name: 'Minnesota, WI',
            },
            {
              name: '10 d E A T h b R E a s T',
            },
            {
              name: '715 - CREEKS',
            },
            {
              name: 'Towers',
            },
            {
              name: 'Blood Bank',
            },
            {
              name: '29 #Strafford APTS',
            },
            {
              name: '666 ʇ',
            },
            {
              name: '8 (circle)',
            },
            {
              name: '____45_____',
            },
            {
              name: 'Heavenly Father',
            },
            {
              name: 'Skinny Love',
            },
            {
              name: 'Creature Fear',
            },
            {
              name: 'Holocene',
            },
            {
              name: 'Calgary',
            },
            {
              name: '33 “GOD”',
            },
            {
              name: 'The Wolves (Act I and II)',
            },
            {
              name: '22 (OVER S&infin;&infin;N)',
            },
          ],
        },
      ],
    },
    url: 'https://www.setlist.fm/setlist/bon-iver/2019/passeio-maritimo-de-alges-oeiras-portugal-139efd5d.html',
  },
  {
    id: '1b9e91cc',
    versionId: '5b06c340',
    eventDate: '11-07-2019',
    lastUpdated: '2019-07-13T08:55:01.000+0000',
    artist: {
      mbid: '437a0e49-c6ae-42f6-a6c1-84f25ed366bc',
      tmid: 1195873,
      name: 'Bon Iver',
      sortName: 'Bon Iver',
      disambiguation: '',
      url: 'https://www.setlist.fm/setlists/bon-iver-43d66f83.html',
    },
    venue: {
      id: '2bd22c96',
      name: 'Valdebebas - IFEMA',
      city: {
        id: '3117735',
        name: 'Madrid',
        state: 'Autonomous Region of Madrid',
        stateCode: '29',
        coords: {
          lat: 40.4165020941502,
          long: -3.70256423950195,
        },
        country: {
          code: 'ES',
          name: 'Spain',
        },
      },
      url: 'https://www.setlist.fm/venue/valdebebas-ifema-madrid-spain-2bd22c96.html',
    },
    tour: {
      name: '22, A Million',
    },
    sets: {
      set: [
        {
          song: [
            {
              name: 'Woods',
            },
            {
              name: '10 d E A T h b R E a s T',
            },
            {
              name: 'Heavenly Father',
            },
            {
              name: '666 ʇ',
            },
            {
              name: 'Blood Bank',
            },
            {
              name: '____45_____',
            },
            {
              name: 'Perth',
            },
            {
              name: 'Minnesota, WI',
            },
            {
              name: '715 - CREEKS',
            },
            {
              name: '8 (circle)',
            },
            {
              name: 'Skinny Love',
            },
            {
              name: 'Hey, Ma',
            },
            {
              name: 'Creature Fear',
            },
            {
              name: 'Holocene',
            },
            {
              name: '33 “GOD”',
            },
            {
              name: '22 (OVER S&infin;&infin;N)',
            },
          ],
        },
        {
          encore: 1,
          song: [
            {
              name: 'For Emma',
              info: 'First time played in 2019',
            },
          ],
        },
      ],
    },
    url: 'https://www.setlist.fm/setlist/bon-iver/2019/valdebebas-ifema-madrid-spain-1b9e91cc.html',
  },
  {
    id: 'b9ea9b2',
    versionId: '6b19569e',
    eventDate: '07-07-2019',
    lastUpdated: '2019-07-08T16:59:42.000+0000',
    artist: {
      mbid: '437a0e49-c6ae-42f6-a6c1-84f25ed366bc',
      tmid: 1195873,
      name: 'Bon Iver',
      sortName: 'Bon Iver',
      disambiguation: '',
      url: 'https://www.setlist.fm/setlists/bon-iver-43d66f83.html',
    },
    venue: {
      id: '43d6770b',
      name: 'Auditorium Stravinski',
      city: {
        id: '2659601',
        name: 'Montreux',
        state: 'Vaud',
        stateCode: 'VD',
        coords: {
          lat: 46.4330064251585,
          long: 6.91143035888672,
        },
        country: {
          code: 'CH',
          name: 'Switzerland',
        },
      },
      url: 'https://www.setlist.fm/venue/auditorium-stravinski-montreux-switzerland-43d6770b.html',
    },
    tour: {
      name: '22, A Million',
    },
    sets: {
      set: [
        {
          song: [
            {
              name: '22 (OVER S&infin;&infin;N)',
            },
            {
              name: '10 d E A T h b R E a s T',
            },
            {
              name: '715 - CREEKS',
            },
            {
              name: '666 ʇ',
            },
            {
              name: 'Towers',
            },
            {
              name: 'Blood Bank',
            },
            {
              name: 'Heavenly Father',
            },
            {
              name: '8 (circle)',
            },
            {
              name: '____45_____',
            },
            {
              name: 'Perth',
            },
            {
              name: 'Minnesota, WI',
            },
            {
              name: '33 “GOD”',
            },
            {
              name: 'Calgary',
              info: 'Folk version',
            },
            {
              name: 'Skinny Love',
            },
            {
              name: 'Holocene',
            },
            {
              name: 'The Wolves (Act I and II)',
            },
          ],
        },
        {
          encore: 1,
          song: [
            {
              name: 'Hey, Ma',
            },
          ],
        },
      ],
    },
    info: 'For Emma was on the printed setlist, but was not played',
    url: 'https://www.setlist.fm/setlist/bon-iver/2019/auditorium-stravinski-montreux-switzerland-b9ea9b2.html',
  },
  {
    id: '3b9170bc',
    versionId: '53185fc9',
    eventDate: '29-06-2019',
    lastUpdated: '2019-07-01T20:08:52.000+0000',
    artist: {
      mbid: '437a0e49-c6ae-42f6-a6c1-84f25ed366bc',
      tmid: 1195873,
      name: 'Bon Iver',
      sortName: 'Bon Iver',
      disambiguation: '',
      url: 'https://www.setlist.fm/setlists/bon-iver-43d66f83.html',
    },
    venue: {
      id: '23d54067',
      name: 'American Family Insurance Amphitheater',
      city: {
        id: '5263045',
        name: 'Milwaukee',
        state: 'Wisconsin',
        stateCode: 'WI',
        coords: {
          lat: 43.0389025,
          long: -87.9064736,
        },
        country: {
          code: 'US',
          name: 'United States',
        },
      },
      url: 'https://www.setlist.fm/venue/american-family-insurance-amphitheater-milwaukee-wi-usa-23d54067.html',
    },
    tour: {
      name: '22, A Million',
    },
    sets: {
      set: [
        {
          song: [
            {
              name: 'Perth',
            },
            {
              name: '10 d E A T h b R E a s T',
            },
            {
              name: '715 - CREEKS',
            },
            {
              name: '666 ʇ',
            },
            {
              name: 'Heavenly Father',
            },
            {
              name: 'Towers',
            },
            {
              name: 'Blood Bank',
            },
            {
              name: 'Beach Baby',
            },
            {
              name: 'Hey, Ma',
              info: 'Tour debut; first performance since official song release',
            },
            {
              name: 'Minnesota, WI',
            },
            {
              name: '8 (circle)',
            },
            {
              name: '____45_____',
            },
            {
              name: '33 “GOD”',
            },
            {
              name: 'Skinny Love',
            },
            {
              name: '22 (OVER S&infin;&infin;N)',
            },
            {
              name: 'Creature Fear',
            },
          ],
        },
        {
          encore: 1,
          song: [
            {
              name: 'Holocene',
            },
            {
              name: 'The Wolves (Act I and II)',
            },
          ],
        },
      ],
    },
    url: 'https://www.setlist.fm/setlist/bon-iver/2019/american-family-insurance-amphitheater-milwaukee-wi-3b9170bc.html',
  },
  {
    id: '7391de49',
    versionId: '631b8ae7',
    eventDate: '14-06-2019',
    lastUpdated: '2019-06-14T20:43:41.000+0000',
    artist: {
      mbid: '437a0e49-c6ae-42f6-a6c1-84f25ed366bc',
      tmid: 1195873,
      name: 'Bon Iver',
      sortName: 'Bon Iver',
      disambiguation: '',
      url: 'https://www.setlist.fm/setlists/bon-iver-43d66f83.html',
    },
    venue: {
      id: '23d6c857',
      name: 'Mölleplatsen',
      city: {
        id: '2692969',
        name: 'Malmö',
        state: 'Skåne County',
        stateCode: '27',
        coords: {
          lat: 55.6058691373243,
          long: 13.0007314682007,
        },
        country: {
          code: 'SE',
          name: 'Sweden',
        },
      },
      url: 'https://www.setlist.fm/venue/molleplatsen-malmo-sweden-23d6c857.html',
    },
    tour: {
      name: '22, A Million',
    },
    sets: {
      set: [
        {
          song: [
            {
              name: '22 (OVER S&infin;&infin;N)',
            },
            {
              name: '10 d E A T h b R E a s T',
            },
            {
              name: '715 - CREEKS',
            },
            {
              name: '666 ʇ',
            },
            {
              name: '29 #Strafford APTS',
            },
            {
              name: 'Creature Fear',
            },
            {
              name: 'Blood Bank',
            },
            {
              name: 'Skinny Love',
            },
            {
              name: 'Michicant',
            },
            {
              name: 'Towers',
            },
            {
              name: 'Perth',
            },
            {
              name: 'Minnesota, WI',
            },
            {
              name: 'Holocene',
            },
            {
              name: '8 (circle)',
            },
            {
              name: '____45_____',
            },
            {
              name: '33 “GOD”',
            },
            {
              name: 'Woods',
            },
          ],
        },
        {
          encore: 1,
          song: [
            {
              name: 'Heavenly Father',
            },
          ],
        },
      ],
    },
    url: 'https://www.setlist.fm/setlist/bon-iver/2019/molleplatsen-malmo-sweden-7391de49.html',
  },
  {
    id: '4b91f3b2',
    versionId: '7b1ba638',
    eventDate: '12-06-2019',
    lastUpdated: '2019-06-13T08:56:20.000+0000',
    artist: {
      mbid: '437a0e49-c6ae-42f6-a6c1-84f25ed366bc',
      tmid: 1195873,
      name: 'Bon Iver',
      sortName: 'Bon Iver',
      disambiguation: '',
      url: 'https://www.setlist.fm/setlists/bon-iver-43d66f83.html',
    },
    venue: {
      id: '1bd571bc',
      name: 'Plenen, Bergenhus Festning',
      city: {
        id: '3161732',
        name: 'Bergen',
        state: 'Hordaland',
        stateCode: '07',
        coords: {
          lat: 60.3931603404213,
          long: 5.3242814540863,
        },
        country: {
          code: 'NO',
          name: 'Norway',
        },
      },
      url: 'https://www.setlist.fm/venue/plenen-bergenhus-festning-bergen-norway-1bd571bc.html',
    },
    tour: {
      name: '22, A Million',
    },
    sets: {
      set: [
        {
          song: [
            {
              name: 'Perth',
            },
            {
              name: '10 d E A T h b R E a s T',
            },
            {
              name: '715 - CREEKS',
            },
            {
              name: '666 ʇ',
            },
            {
              name: 'Heavenly Father',
            },
            {
              name: 'Calgary',
            },
            {
              name: 'Towers',
            },
            {
              name: 'Blood Bank',
            },
            {
              name: 'Skinny Love',
            },
            {
              name: '____45_____',
            },
            {
              name: 'Woods',
            },
            {
              name: '33 “GOD”',
            },
            {
              name: '8 (circle)',
            },
            {
              name: 'Minnesota, WI',
            },
            {
              name: 'Holocene',
            },
            {
              name: 'Creature Fear',
            },
            {
              name: '22 (OVER S&infin;&infin;N)',
            },
          ],
        },
        {
          encore: 1,
          song: [
            {
              name: 'The Wolves (Act I and II)',
            },
          ],
        },
      ],
    },
    url: 'https://www.setlist.fm/setlist/bon-iver/2019/plenen-bergenhus-festning-bergen-norway-4b91f3b2.html',
  },
  {
    id: '3b9180ac',
    versionId: '1b1bb158',
    eventDate: '08-06-2019',
    lastUpdated: '2019-06-12T20:11:25.000+0000',
    artist: {
      mbid: '437a0e49-c6ae-42f6-a6c1-84f25ed366bc',
      tmid: 1195873,
      name: 'Bon Iver',
      sortName: 'Bon Iver',
      disambiguation: '',
      url: 'https://www.setlist.fm/setlists/bon-iver-43d66f83.html',
    },
    venue: {
      id: 'bd7d51a',
      name: 'Ådalen',
      city: {
        id: '2624652',
        name: 'Aarhus',
        state: 'Central Jutland',
        stateCode: '18',
        coords: {
          lat: 56.1567365813134,
          long: 10.2107620239258,
        },
        country: {
          code: 'DK',
          name: 'Denmark',
        },
      },
      url: 'https://www.setlist.fm/venue/adalen-aarhus-denmark-bd7d51a.html',
    },
    tour: {
      name: '22, A Million',
    },
    sets: {
      set: [
        {
          song: [
            {
              name: '22 (OVER S&infin;&infin;N)',
            },
            {
              name: '10 d E A T h b R E a s T',
            },
            {
              name: '715 - CREEKS',
            },
            {
              name: '666 ʇ',
            },
            {
              name: 'Towers',
            },
            {
              name: '33 “GOD”',
            },
            {
              name: 'Blood Bank',
            },
            {
              name: 'Perth',
            },
            {
              name: 'Flume',
            },
            {
              name: 'Calgary',
              info: 'folk version',
            },
            {
              name: 'Woods',
            },
            {
              name: 'Holocene',
            },
            {
              name: '8 (circle)',
            },
            {
              name: 'Skinny Love',
            },
            {
              name: 'Minnesota, WI',
            },
            {
              name: '____45_____',
            },
            {
              name: 'The Wolves (Act I and II)',
            },
          ],
        },
        {
          encore: 1,
          song: [
            {
              name: 'Creature Fear',
            },
          ],
        },
      ],
    },
    info: 'Not quite sure about the order',
    url: 'https://www.setlist.fm/setlist/bon-iver/2019/adalen-aarhus-denmark-3b9180ac.html',
  },
  {
    id: '6391a683',
    versionId: '2b1a8416',
    eventDate: '04-06-2019',
    lastUpdated: '2019-06-05T09:00:26.000+0000',
    artist: {
      mbid: '437a0e49-c6ae-42f6-a6c1-84f25ed366bc',
      tmid: 1195873,
      name: 'Bon Iver',
      sortName: 'Bon Iver',
      disambiguation: '',
      url: 'https://www.setlist.fm/setlists/bon-iver-43d66f83.html',
    },
    venue: {
      id: '43d22f73',
      name: 'Rockhal Main Hall',
      city: {
        id: '6693269',
        name: 'Esch-sur-Alzette',
        state: 'Luxembourg',
        stateCode: '03',
        coords: {
          lat: 49.4958333,
          long: 5.9805556,
        },
        country: {
          code: 'LU',
          name: 'Luxembourg',
        },
      },
      url: 'https://www.setlist.fm/venue/rockhal-main-hall-esch-sur-alzette-luxembourg-43d22f73.html',
    },
    tour: {
      name: '22, A Million',
    },
    sets: {
      set: [
        {
          song: [
            {
              name: 'Perth',
            },
            {
              name: '10 d E A T h b R E a s T',
            },
            {
              name: '715 - CREEKS',
            },
            {
              name: 'Towers',
            },
            {
              name: 'Heavenly Father',
            },
            {
              name: 'Beach Baby',
            },
            {
              name: 'Blood Bank',
            },
            {
              name: '____45_____',
            },
            {
              name: '33 “GOD”',
            },
            {
              name: 'Holocene',
            },
          ],
        },
        {
          name: ' ',
          song: [
            {
              name: 'Woods',
            },
            {
              name: 'Minnesota, WI',
            },
            {
              name: 'Calgary',
            },
            {
              name: '666 ʇ',
            },
            {
              name: '21 M♢♢N WATER',
            },
            {
              name: '8 (circle)',
            },
            {
              name: 'Skinny Love',
            },
            {
              name: '22 (OVER S&infin;&infin;N)',
            },
            {
              name: 're: Stacks',
            },
            {
              name: 'Creature Fear',
            },
          ],
        },
        {
          encore: 1,
          name: ' ',
          song: [
            {
              name: 'The Wolves (Act I and II)',
            },
          ],
        },
      ],
    },
    url: 'https://www.setlist.fm/setlist/bon-iver/2019/rockhal-main-hall-esch-sur-alzette-luxembourg-6391a683.html',
  },
  {
    id: '2b91b87e',
    versionId: '7b1b2a6c',
    eventDate: '02-06-2019',
    lastUpdated: '2019-06-18T16:10:25.000+0000',
    artist: {
      mbid: '437a0e49-c6ae-42f6-a6c1-84f25ed366bc',
      tmid: 1195873,
      name: 'Bon Iver',
      sortName: 'Bon Iver',
      disambiguation: '',
      url: 'https://www.setlist.fm/setlists/bon-iver-43d66f83.html',
    },
    venue: {
      id: '33d6c085',
      name: 'Victoria Park',
      city: {
        id: '2643743',
        name: 'London',
        state: 'England',
        stateCode: 'ENG',
        coords: {
          lat: 51.5084152563931,
          long: -0.125532746315002,
        },
        country: {
          code: 'GB',
          name: 'United Kingdom',
        },
      },
      url: 'https://www.setlist.fm/venue/victoria-park-london-england-33d6c085.html',
    },
    tour: {
      name: '22, A Million',
    },
    sets: {
      set: [
        {
          song: [
            {
              name: 'Perth',
            },
            {
              name: 'Minnesota, WI',
            },
            {
              name: '10 d E A T h b R E a s T',
            },
            {
              name: '29 #Strafford APTS',
            },
            {
              name: '715 - CREEKS',
            },
            {
              name: 'Heavenly Father',
            },
            {
              name: '666 ʇ',
            },
            {
              name: 'Towers',
            },
            {
              name: 'Blood Bank',
            },
            {
              name: '____45_____',
            },
            {
              name: '33 “GOD”',
            },
            {
              name: '8 (circle)',
            },
            {
              name: 'Woods',
            },
            {
              name: 'Skinny Love',
            },
            {
              name: '22 (OVER S&infin;&infin;N)',
            },
            {
              name: 'Creature Fear',
            },
            {
              name: 'Holocene',
            },
            {
              name: 'Hey, Ma',
              tape: true,
            },
            {
              name: 'U (Man Like)',
              tape: true,
              info: 'song debut',
            },
          ],
        },
      ],
    },
    url: 'https://www.setlist.fm/setlist/bon-iver/2019/victoria-park-london-england-2b91b87e.html',
  },
  {
    id: '5b904b68',
    versionId: '1b1d5968',
    eventDate: '31-05-2019',
    lastUpdated: '2019-06-02T12:56:11.000+0000',
    artist: {
      mbid: '437a0e49-c6ae-42f6-a6c1-84f25ed366bc',
      tmid: 1195873,
      name: 'Bon Iver',
      sortName: 'Bon Iver',
      disambiguation: '',
      url: 'https://www.setlist.fm/setlists/bon-iver-43d66f83.html',
    },
    venue: {
      id: '43d4a35f',
      name: 'Beekse Bergen',
      city: {
        id: '2754066',
        name: 'Hilvarenbeek',
        state: 'North Brabant',
        stateCode: '06',
        coords: {
          lat: 51.485833,
          long: 5.1375,
        },
        country: {
          code: 'NL',
          name: 'Netherlands',
        },
      },
      url: 'https://www.setlist.fm/venue/beekse-bergen-hilvarenbeek-netherlands-43d4a35f.html',
    },
    tour: {
      name: '22, A Million',
    },
    sets: {
      set: [
        {
          song: [
            {
              name: 'Perth',
            },
            {
              name: '10 d E A T h b R E a s T',
            },
            {
              name: '715 - CREEKS',
            },
            {
              name: 'Heavenly Father',
            },
            {
              name: 'Towers',
            },
            {
              name: 'Blood Bank',
            },
            {
              name: '29 #Strafford APTS',
            },
            {
              name: '666 ʇ',
            },
            {
              name: '21 M♢♢N WATER',
            },
            {
              name: '8 (circle)',
            },
            {
              name: '____45_____',
            },
            {
              name: 'Minnesota, WI',
            },
            {
              name: 'Calgary',
            },
            {
              name: '33 “GOD”',
            },
            {
              name: '22 (OVER S&infin;&infin;N)',
            },
            {
              name: 'The Wolves (Act I and II)',
            },
          ],
        },
        {
          encore: 1,
          song: [
            {
              name: 'Skinny Love',
            },
          ],
        },
      ],
    },
    url: 'https://www.setlist.fm/setlist/bon-iver/2019/beekse-bergen-hilvarenbeek-netherlands-5b904b68.html',
  },
  {
    id: '7393d699',
    versionId: '2b10d80e',
    eventDate: '08-04-2019',
    lastUpdated: '2019-04-09T02:31:31.000+0000',
    artist: {
      mbid: '437a0e49-c6ae-42f6-a6c1-84f25ed366bc',
      tmid: 1195873,
      name: 'Bon Iver',
      sortName: 'Bon Iver',
      disambiguation: '',
      url: 'https://www.setlist.fm/setlists/bon-iver-43d66f83.html',
    },
    venue: {
      id: '33d63045',
      name: 'Fox Theatre',
      city: {
        id: '4990729',
        name: 'Detroit',
        state: 'Michigan',
        stateCode: 'MI',
        coords: {
          lat: 42.331427,
          long: -83.0457538,
        },
        country: {
          code: 'US',
          name: 'United States',
        },
      },
      url: 'https://www.setlist.fm/venue/fox-theatre-detroit-mi-usa-33d63045.html',
    },
    tour: {
      name: '22, A Million',
    },
    sets: {
      set: [
        {
          song: [
            {
              name: 'Perth',
            },
            {
              name: '10 d E A T h b R E a s T',
            },
            {
              name: '715 - CREEKS',
            },
            {
              name: 'Heavenly Father',
            },
            {
              name: 'Towers',
            },
            {
              name: '666 ʇ',
            },
            {
              name: 'Michicant',
            },
            {
              name: '8 (circle)',
            },
            {
              name: 'Flume',
            },
            {
              name: 'Creature Fear',
            },
          ],
        },
        {
          name: ' ',
          song: [
            {
              name: '____45_____',
            },
            {
              name: 'Minnesota, WI',
            },
            {
              name: 'Blood Bank',
            },
            {
              name: 'Holocene',
            },
            {
              name: 're: Stacks',
            },
            {
              name: 'Skinny Love',
            },
            {
              name: '33 “GOD”',
            },
            {
              name: 'Beth/Rest',
            },
            {
              name: '22 (OVER S&infin;&infin;N)',
            },
          ],
        },
        {
          encore: 1,
          name: ' ',
          song: [
            {
              name: 'The Wolves (Act I and II)',
            },
          ],
        },
      ],
    },
    url: 'https://www.setlist.fm/setlist/bon-iver/2019/fox-theatre-detroit-mi-7393d699.html',
  },
  {
    id: '6b93d6a6',
    versionId: 'b108dfe',
    eventDate: '06-04-2019',
    lastUpdated: '2019-04-07T03:09:01.000+0000',
    artist: {
      mbid: '437a0e49-c6ae-42f6-a6c1-84f25ed366bc',
      tmid: 1195873,
      name: 'Bon Iver',
      sortName: 'Bon Iver',
      disambiguation: '',
      url: 'https://www.setlist.fm/setlists/bon-iver-43d66f83.html',
    },
    venue: {
      id: '2bd24056',
      name: 'The Rust Belt',
      city: {
        id: '4890536',
        name: 'East Moline',
        state: 'Illinois',
        stateCode: 'IL',
        coords: {
          lat: 41.5008673,
          long: -90.4442979,
        },
        country: {
          code: 'US',
          name: 'United States',
        },
      },
      url: 'https://www.setlist.fm/venue/the-rust-belt-east-moline-il-usa-2bd24056.html',
    },
    tour: {
      name: '22, A Million',
    },
    sets: {
      set: [
        {
          name: 'Set 1',
          song: [
            {
              name: '22 (OVER S&infin;&infin;N)',
            },
            {
              name: '666 ʇ',
            },
            {
              name: '10 d E A T h b R E a s T',
            },
            {
              name: '715 - CREEKS',
            },
            {
              name: 'Heavenly Father',
            },
            {
              name: 'Towers',
            },
            {
              name: '21 M♢♢N WATER',
            },
            {
              name: '8 (circle)',
            },
            {
              name: '29 #Strafford APTS',
            },
            {
              name: 'Creature Fear',
            },
          ],
        },
        {
          name: 'Set 2',
          song: [
            {
              name: 'Perth',
            },
            {
              name: 'Minnesota, WI',
            },
            {
              name: 'Blood Bank',
            },
            {
              name: 'Calgary',
            },
            {
              name: '____45_____',
            },
            {
              name: 'Holocene',
            },
            {
              name: '33 “GOD”',
            },
            {
              name: 'Skinny Love',
            },
          ],
        },
        {
          encore: 1,
          name: 'Set 2',
          song: [
            {
              name: 'The Wolves (Act I and II)',
            },
          ],
        },
      ],
    },
    url: 'https://www.setlist.fm/setlist/bon-iver/2019/the-rust-belt-east-moline-il-6b93d6a6.html',
  },
  {
    id: 'b93dd7e',
    versionId: 'b10fda2',
    eventDate: '04-04-2019',
    lastUpdated: '2019-04-07T16:02:25.000+0000',
    artist: {
      mbid: '437a0e49-c6ae-42f6-a6c1-84f25ed366bc',
      tmid: 1195873,
      name: 'Bon Iver',
      sortName: 'Bon Iver',
      disambiguation: '',
      url: 'https://www.setlist.fm/setlists/bon-iver-43d66f83.html',
    },
    venue: {
      id: '43d22b07',
      name: 'Stifel Theatre',
      city: {
        id: '4407066',
        name: 'St. Louis',
        state: 'Missouri',
        stateCode: 'MO',
        coords: {
          lat: 38.6272733,
          long: -90.1978889,
        },
        country: {
          code: 'US',
          name: 'United States',
        },
      },
      url: 'https://www.setlist.fm/venue/stifel-theatre-st-louis-mo-usa-43d22b07.html',
    },
    tour: {
      name: '22, A Million',
    },
    sets: {
      set: [
        {
          name: 'Set 1',
          song: [
            {
              name: 'Perth',
            },
            {
              name: '10 d E A T h b R E a s T',
            },
            {
              name: '715 - CREEKS',
            },
            {
              name: 'Towers',
            },
            {
              name: 'Heavenly Father',
            },
            {
              name: '666 ʇ',
            },
            {
              name: 'Flume',
            },
            {
              name: '____45_____',
            },
            {
              name: 'Creature Fear',
            },
            {
              name: '00000 Million',
            },
          ],
        },
        {
          name: 'Set 2',
          song: [
            {
              name: 'Minnesota, WI',
            },
            {
              name: 'Blood Bank',
            },
            {
              name: '33 “GOD”',
            },
            {
              name: '29 #Strafford APTS',
            },
            {
              name: 'Skinny Love',
            },
            {
              name: 'Holocene',
            },
            {
              name: '8 (circle)',
            },
            {
              name: '22 (OVER S&infin;&infin;N)',
            },
          ],
        },
        {
          encore: 1,
          name: 'Set 2',
          song: [
            {
              name: 're: Stacks',
            },
            {
              name: 'The Wolves (Act I and II)',
            },
          ],
        },
      ],
    },
    url: 'https://www.setlist.fm/setlist/bon-iver/2019/stifel-theatre-st-louis-mo-b93dd7e.html',
  },
  {
    id: '1393f541',
    versionId: '1310fda1',
    eventDate: '03-04-2019',
    lastUpdated: '2019-04-07T16:02:46.000+0000',
    artist: {
      mbid: '437a0e49-c6ae-42f6-a6c1-84f25ed366bc',
      tmid: 1195873,
      name: 'Bon Iver',
      sortName: 'Bon Iver',
      disambiguation: '',
      url: 'https://www.setlist.fm/setlists/bon-iver-43d66f83.html',
    },
    venue: {
      id: '3bd5d00c',
      name: 'The Criterion',
      city: {
        id: '4544349',
        name: 'Oklahoma City',
        state: 'Oklahoma',
        stateCode: 'OK',
        coords: {
          lat: 35.4675602,
          long: -97.5164276,
        },
        country: {
          code: 'US',
          name: 'United States',
        },
      },
      url: 'https://www.setlist.fm/venue/the-criterion-oklahoma-city-ok-usa-3bd5d00c.html',
    },
    tour: {
      name: '22, A Million',
    },
    sets: {
      set: [
        {
          name: 'Set 1',
          song: [
            {
              name: '22 (OVER S&infin;&infin;N)',
            },
            {
              name: '10 d E A T h b R E a s T',
            },
            {
              name: '715 - CREEKS',
            },
            {
              name: '666 ʇ',
            },
            {
              name: '29 #Strafford APTS',
            },
            {
              name: 'Heavenly Father',
            },
            {
              name: 'Towers',
            },
            {
              name: '21 M♢♢N WATER',
            },
            {
              name: '8 (circle)',
            },
            {
              name: 'Creature Fear',
            },
          ],
        },
        {
          name: 'Set 2',
          song: [
            {
              name: 'Perth',
            },
            {
              name: 'Minnesota, WI',
            },
            {
              name: 'Blood Bank',
            },
            {
              name: 'Flume',
            },
            {
              name: 'Calgary',
            },
            {
              name: '____45_____',
            },
            {
              name: '33 “GOD”',
            },
            {
              name: 'Holocene',
            },
            {
              name: 'Beth/Rest',
            },
          ],
        },
        {
          encore: 1,
          name: 'Set 2',
          song: [
            {
              name: 'Skinny Love',
            },
            {
              name: 'The Wolves (Act I and II)',
            },
          ],
        },
      ],
    },
    url: 'https://www.setlist.fm/setlist/bon-iver/2019/the-criterion-oklahoma-city-ok-1393f541.html',
  },
  {
    id: '393f543',
    versionId: '43131353',
    eventDate: '01-04-2019',
    lastUpdated: '2019-04-02T20:52:09.000+0000',
    artist: {
      mbid: '437a0e49-c6ae-42f6-a6c1-84f25ed366bc',
      tmid: 1195873,
      name: 'Bon Iver',
      sortName: 'Bon Iver',
      disambiguation: '',
      url: 'https://www.setlist.fm/setlists/bon-iver-43d66f83.html',
    },
    venue: {
      id: '13d62db9',
      name: 'Orpheum Theatre',
      city: {
        id: '4641239',
        name: 'Memphis',
        state: 'Tennessee',
        stateCode: 'TN',
        coords: {
          lat: 35.1495343,
          long: -90.0489801,
        },
        country: {
          code: 'US',
          name: 'United States',
        },
      },
      url: 'https://www.setlist.fm/venue/orpheum-theatre-memphis-tn-usa-13d62db9.html',
    },
    tour: {
      name: '22, A Million',
    },
    sets: {
      set: [
        {
          name: 'Set 1',
          song: [
            {
              name: '10 d E A T h b R E a s T',
            },
            {
              name: '715 - CREEKS',
            },
            {
              name: '666 ʇ',
            },
            {
              name: 'Heavenly Father',
            },
            {
              name: 'Towers',
            },
            {
              name: 'Flume',
            },
            {
              name: '33 “GOD”',
            },
            {
              name: '8 (circle)',
            },
            {
              name: 'Calgary',
              info: 'folk version',
            },
            {
              name: 'Creature Fear',
            },
          ],
        },
        {
          name: 'Set 2',
          song: [
            {
              name: 'Woods',
            },
            {
              name: 'Perth',
            },
            {
              name: 'Minnesota, WI',
            },
            {
              name: '____45_____',
            },
            {
              name: '00000 Million',
            },
            {
              name: 'Blood Bank',
            },
            {
              name: 're: Stacks',
            },
            {
              name: 'Holocene',
            },
            {
              name: 'The Wolves (Act I and II)',
            },
          ],
        },
        {
          encore: 1,
          name: 'Set 2',
          song: [
            {
              name: '22 (OVER S&infin;&infin;N)',
            },
          ],
        },
      ],
    },
    url: 'https://www.setlist.fm/setlist/bon-iver/2019/orpheum-theatre-memphis-tn-393f543.html',
  },
  {
    id: '73938af5',
    versionId: '231334fb',
    eventDate: '31-03-2019',
    lastUpdated: '2019-04-01T03:03:59.000+0000',
    artist: {
      mbid: '437a0e49-c6ae-42f6-a6c1-84f25ed366bc',
      tmid: 1195873,
      name: 'Bon Iver',
      sortName: 'Bon Iver',
      disambiguation: '',
      url: 'https://www.setlist.fm/setlists/bon-iver-43d66f83.html',
    },
    venue: {
      id: '1bd61d50',
      name: 'Taft Theatre',
      city: {
        id: '4508722',
        name: 'Cincinnati',
        state: 'Ohio',
        stateCode: 'OH',
        coords: {
          lat: 39.1620036,
          long: -84.4568863,
        },
        country: {
          code: 'US',
          name: 'United States',
        },
      },
      url: 'https://www.setlist.fm/venue/taft-theatre-cincinnati-oh-usa-1bd61d50.html',
    },
    tour: {
      name: '22, A Million',
    },
    sets: {
      set: [
        {
          name: 'Set 1',
          song: [
            {
              name: 'Perth',
            },
            {
              name: '10 d E A T h b R E a s T',
            },
            {
              name: '715 - CREEKS',
            },
            {
              name: 'Heavenly Father',
            },
            {
              name: 'Towers',
            },
            {
              name: 'Beach Baby',
            },
            {
              name: '666 ʇ',
            },
            {
              name: '21 M♢♢N WATER',
            },
            {
              name: '8 (circle)',
            },
            {
              name: 'Creature Fear',
            },
          ],
        },
        {
          name: 'Set 2',
          song: [
            {
              name: '22 (OVER S&infin;&infin;N)',
            },
            {
              name: 'Minnesota, WI',
            },
            {
              name: 'Blood Bank',
            },
            {
              name: '29 #Strafford APTS',
            },
            {
              name: '33 “GOD”',
            },
            {
              name: 'Flume',
            },
            {
              name: '____45_____',
            },
            {
              name: 'Holocene',
            },
            {
              name: 'Skinny Love',
            },
          ],
        },
        {
          encore: 1,
          name: 'Set 2',
          song: [
            {
              name: 'Beth/Rest',
            },
            {
              name: 'The Wolves (Act I and II)',
            },
          ],
        },
      ],
    },
    url: 'https://www.setlist.fm/setlist/bon-iver/2019/taft-theatre-cincinnati-oh-73938af5.html',
  },
];


export default function SetlistPanels() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {setlists.map(setlist => (
        <ExpansionPanel key={setlist.id}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>{setlistDate(setlist.eventDate)}</Typography>
            <Typography className={classes.secondaryHeading}>{setlist.venue.city.name}, {setlist.venue.city.country.name === 'United States' ? setlist.venue.city.stateCode : setlist.venue.city.country.name}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <SetlistCard event={setlist} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}


    </div>
  );
}

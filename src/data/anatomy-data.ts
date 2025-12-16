export interface Muscle {
  name: string;
  origin: string;
  insertion: string;
  innervation: string;
  function: string;
}

export interface Subsection {
  id: string;
  title: string;
  note?: string;
  muscles?: Muscle[];
  description?: string;
  parts?: {
    name: string;
    origin: string;
    course?: string;
    insertion: string;
  }[];
}

export interface Section {
  id: string;
  title: string;
  subsections?: Subsection[];
  muscles?: Muscle[];
}

export interface AnatomyData {
  title: string;
  sections: Section[];
}

export const anatomyData: AnatomyData = {
  "title": "Samenvatting Anatomie",
  "sections": [
    {
      "id": "deep_back_muscles",
      "title": "DIEPERE RUGSPIEREN",
      "subsections": [
        {
          "id": "spinocostal_group",
          "title": "Spinocostale groep",
          "muscles": [
            {
              "name": "m. serratus posterior superior",
              "origin": "proc. spinosus C6-T2",
              "insertion": "angulus costae rib 2-5",
              "innervation": "Nervi intercostales",
              "function": "Elevatie costae (inspiratie) = vergroten van de thoraxholte"
            },
            {
              "name": "m. serratus posterior inferior",
              "origin": "proc. spinosus T11-L2",
              "insertion": "angulus costae rib 9-12",
              "innervation": "Nervi intercostales",
              "function": "Depressie costae (expiratie) = verkleinen van de thoraxholte"
            }
          ]
        },
        {
          "id": "spinotransverse_group",
          "title": "Spinotransversale groep",
          "muscles": [
            {
              "name": "m. splenius capitis",
              "origin": "proc. spinosus C3-C7",
              "insertion": "Rr. dorsalis nn. spinales cervicales",
              "innervation": "Rr. dorsalis nn. spinales cervicales",
              "function": "Unilaterale contractie: Lateroflexie hoofd - Homolaterale rotatie hoofd en nek. Bilaterale contractie: retroflexie hoofd"
            },
            {
              "name": "m. splenius cervicis",
              "origin": "proc. spinosus T1-T6",
              "insertion": "tuberculum posterior (proc. transversus)",
              "innervation": "Rr. dorsalis nn. spinales cervicales",
              "function": "Unilaterale contractie: lateroflexie hoofd. Bilaterale contractie: retroflexie hoofd en nek"
            }
          ]
        },
        {
          "id": "transversospinal_group",
          "title": "Transversospinale groep",
          "muscles": [
            {
              "name": "m. semispinalis thoracis",
              "origin": "proc. transversus T7-T12",
              "insertion": "rr. dorsalis nn. spinales",
              "innervation": "rr. dorsalis nn. spinales",
              "function": "Unilaterale contractie: lateroflexie WZ. Bilaterale contractie: retroflexie WZ"
            },
            {
              "name": "m. semispinalis cervicis",
              "origin": "proc. transversus T1-T6",
              "insertion": "rr. dorsalis nn. spinales",
              "innervation": "rr. dorsalis nn. spinales",
              "function": "Unilaterale contractie: Lateroflexie hoofd en nek - Contralaterale rotatie hoofd en nek. Bilaterale contractie: Retroflexie - Extensie hoofd, nek en romp"
            },
            {
              "name": "m. semispinalis capitis",
              "origin": "proc. transversus T1-T7 - Proc. articularis C4-C7",
              "insertion": "rr. dorsalis nn. spinales",
              "innervation": "rr. dorsalis nn. spinales",
              "function": "Unilaterale contractie: heterolaterale torsie hoofd. Bilaterale contractie: retroflexie hoofd"
            },
            {
              "name": "m. multifidus",
              "origin": "Dorsale zijde sacrum - Proc. mamillaris lumbale wervels - Proc. transversus thoracale wervels - Proc. articularis C4-C7",
              "insertion": "rr. dorsalis nn. spinales",
              "innervation": "rr. dorsalis nn. spinales",
              "function": "Unilaterale contractie: homolaterale flexie en torsie wervelzuil. Bilaterale contractie: retroflexie wervelzuil"
            }
          ]
        },
        {
          "id": "short_back_muscles",
          "title": "Korterechterugspieren",
          "muscles": [
            {
              "name": "mm. intertransversarii lumborum medialis",
              "origin": "proc. mamillaris L1-L5",
              "insertion": "rr. dorsalis nn. spinales",
              "innervation": "rr. dorsalis nn. spinales",
              "function": "Unilaterale contractie: homolaterale flexie. Bilaterale contractie: strekken van de wervelzuil"
            },
            {
              "name": "mm. intertransversarii lumborum lateralis",
              "origin": "proc. costarius L1-L5",
              "insertion": "rr. dorsalis nn. spinales",
              "innervation": "rr. dorsalis nn. spinales",
              "function": "Unilaterale contractie: homolaterale flexie. Bilaterale contractie: strekken van de wervelzuil"
            },
            {
              "name": "mm. intertransversarii thoracis",
              "origin": "proc. transversus van de boven liggende wervel",
              "insertion": "rr. dorsalis nn. spinales",
              "innervation": "rr. dorsalis nn. spinales",
              "function": "Unilaterale contractie: homolaterale flexie. Bilaterale contractie: strekken van de wervelzuil"
            },
            {
              "name": "mm. intertransversarii cervicis anteriores",
              "origin": "tuberculum anterius van de cervicale wervels",
              "insertion": "rr. dorsalis nn. spinales",
              "innervation": "rr. dorsalis nn. spinales",
              "function": "Unilaterale contractie: homolaterale flexie. Bilaterale contractie: strekken van de wervelzuil"
            },
            {
              "name": "mm. intertransversarii cervicis posteriores",
              "origin": "tuberculum posterius van de cervicale wervels",
              "insertion": "rr. dorsalis nn. spinales",
              "innervation": "rr. dorsalis nn. spinales",
              "function": "Unilaterale contractie: homolaterale flexie. Bilaterale contractie: strekken van de wervelzuil"
            },
            {
              "name": "mm. interspinales",
              "origin": "proc. spinosus van de boven liggende wervel",
              "insertion": "rr. dorsalis nn. spinales",
              "innervation": "rr. dorsalis nn. spinales",
              "function": "Retroflexie / extensie wervelzuil"
            },
            {
              "name": "mm. levatores costarum",
              "origin": "proc. transversus cervicale en thoracale wervels",
              "insertion": "rr. intercostales 1-11",
              "innervation": "rr. intercostales 1-11",
              "function": "Inspiratie bevorderen (ribben opheffen) = hulpademhalingsspier"
            }
          ]
        },
        {
          "id": "rotators",
          "title": "mm. rotatores",
          "muscles": [
            {
              "name": "mm. rotatores",
              "origin": "proc. transversus cervicale en thoracale wervels",
              "insertion": "rr. dorsalis nn. spinales",
              "innervation": "rr. dorsalis nn. spinales",
              "function": "Wervelsdraaiing rondom longitudinale as"
            }
          ]
        }
      ]
    },
    {
      "id": "shallow_back_muscles",
      "title": "LANGERE RUGSPIEREN",
      "subsections": [
        {
          "id": "longer_back_muscles",
          "title": "Langere rugspieren",
          "muscles": [
            {
              "name": "mm. spinales",
              "origin": "proc. Spinosus T11-L2",
              "insertion": "rr. dorsalis nn. spinales",
              "innervation": "rr. dorsalis nn. spinales",
              "function": "Unilaterale contractie: homolaterale flexie wervelzuil. Bilaterale contractie: retroflexie / extensie WZ"
            }
          ]
        }
      ]
    },
    {
      "id": "pelvic_floor",
      "title": "BEKKENBODEMSPIEREN",
      "subsections": [
        {
          "id": "superficial_layer",
          "title": "Het oppervlakkige plan",
          "muscles": [
            {
              "name": "m. sphincter ani externus",
              "origin": "Omgeeft het hele anaalkanaal",
              "insertion": "",
              "innervation": "nn. rectales inferiores van n. pudendus",
              "function": "Willekeurige contractie aars. Vormt aarsspleet. Ophouden van stoelgang"
            },
            {
              "name": "m. bulbospongiosus",
              "origin": "Man: centrum tendineum perinei, corpora cavernosa (L en R) en corpus spongiosum. Vrouw: centrum tendineum perinei, dorsale clitoriswand",
              "insertion": "",
              "innervation": "nn. perinealis van n. pudendus",
              "function": "Man: Erectie, Trekt ritmisch samen bij ejalculatie, Evacueert tijdens contractie sperma/urine uit urethra. Vrouw: Afsluiten vaginale opening, Trekt ritmisch samen tijdens orgasme"
            },
            {
              "name": "m. ischiocavernosus",
              "origin": "Man: binnenzijde van tuber ischiadicum en ramus ossis ischii, crura. Vrouw: binnenzijde van tuber ischiadicum en ramus ossis ischii, dorsale zijde van clitoris",
              "insertion": "",
              "innervation": "nn. perinealis van n. pudendus",
              "function": "Man: Erectie in stand houden (belemmeren van bloedafvoer uit corpora cavernosa). Vrouw: Clitoriszwelling in stand houden"
            },
            {
              "name": "m. transversus perinei superficialis",
              "origin": "tuber ischiadicum",
              "insertion": "centrum tendineum perinei",
              "innervation": "nn. perinealis van n. pudendus",
              "function": ""
            }
          ]
        },
        {
          "id": "middle_layer",
          "title": "Het middenplan",
          "muscles": [
            {
              "name": "m. transversus perinei profundus",
              "origin": "r. ossis ischii en r. inferior ossis pubis",
              "insertion": "hiatus urogenitalis",
              "innervation": "n. dorsalis penis/clitoridis van n. pudendus",
              "function": "Steunfunctie (fixeren van perineum)"
            },
            {
              "name": "m. sphincter urethrae externus",
              "origin": "Ringvormig rond urethra, versmelt partieel met m. transversus perinei profundus",
              "insertion": "",
              "innervation": "n. dorsalis penis/clitoridis van n. pudendus",
              "function": "Fixeren van urethra in perineum. Afsluiten van urethra"
            },
            {
              "name": "m. sphincter ani",
              "origin": "Diepe deel van de spier",
              "insertion": "",
              "innervation": "nn. rectales inferiores van n. pudendus",
              "function": ""
            }
          ]
        },
        {
          "id": "deep_layer",
          "title": "Het diepe plan",
          "note": "Vormen diaphragma pelvis omgeven door fascia pelvis visceralis en parietalis",
          "muscles": [
            {
              "name": "m. levatorani",
              "origin": "",
              "insertion": "",
              "innervation": "rr. m. levatorani van n. pudendus",
              "function": ""
            },
            {
              "name": "m. puborectalis",
              "origin": "os pubis (1 cm van symphysis pubis)",
              "insertion": "Voorste vezels: m. levator prostatae (Man) / m. pubovaginalis (Vrouw). Middelste vezels: centrum tendineum perinei. Dorsale vezels: dorsale zijde rectum",
              "innervation": "",
              "function": "Anorectale hoek verwekken = fecaal continent"
            },
            {
              "name": "m. pubococcygeus",
              "origin": "os pubis",
              "insertion": "lig. anococcygeum en coccyx",
              "innervation": "",
              "function": "Coccyx opplichten. Verwekt crena ani / aarsgroeve"
            },
            {
              "name": "m. iliococcygeus",
              "origin": "spina ischiadica",
              "insertion": "lig. anococcygeum en coccyx",
              "innervation": "Plexus sacralis S3-S4",
              "function": "Bekkenbodem ondersteunen"
            },
            {
              "name": "m. coccygeus",
              "origin": "spina ischiadica",
              "insertion": "laterale rand coccyx",
              "innervation": "n. coccygeus plexus sacralis",
              "function": ""
            }
          ]
        }
      ]
    },
    {
      "id": "auxiliary_apparatus",
      "title": "HULPAPPARATEN",
      "subsections": [
        {
          "id": "fascia_thoracolumbalis",
          "title": "Fascia thoracolumbalis",
          "description": "Ligamentum iliolumbale: Origo: proc. spinosus T1-L5 - sacrum - dorsaal zijde os ilium. Verloop: op de erector spinae - onder m. serratus posterior en m. rhomboidei - gaat over in de fascia nuchae (onder m. trapezius). Insertio: linea nuchae",
          "parts": [
            {
              "name": "Ligamentum iliolumbale",
              "origin": "proc. spinosus T1-L5 - sacrum - dorsaal zijde os ilium",
              "course": "op de erector spinae - onder m. serratus posterior en m. rhomboidei - gaat over in de fascia nuchae (onder m. trapezius)",
              "insertion": "linea nuchae"
            }
          ]
        },
        {
          "id": "ligamentum_lumbocostale",
          "title": "Ligamentum lumbocostale",
          "description": "Origo: proc. costarius L1-L5. Insertio: onderste rib - crista iliaca. Verloop: tussen m. quadratus lumborum en m. erector spinae"
        }
      ]
    },
    {
      "id": "musculi_capitis",
      "title": "MUSCULI CAPITIS",
      "muscles": [
        {
          "name": "m. rectus capitis posterior major",
          "origin": "proc. spinosus axis",
          "insertion": "n. suboccipitalis",
          "innervation": "n. suboccipitalis",
          "function": "Anteversie continent. Willekeurige contractie aars"
        },
        {
          "name": "m. rectus capitis posterior minor",
          "origin": "tuberculum posterius atlantis",
          "insertion": "n. suboccipitalis",
          "innervation": "n. suboccipitalis",
          "function": "Unilaterale contractie: homolaterale rotatie hoofd. Bilaterale contractie: retroflexie hoofd"
        },
        {
          "name": "m. obliquus capitis superior",
          "origin": "massa lateralis atlantis",
          "insertion": "n. suboccipitalis",
          "innervation": "n. suboccipitalis",
          "function": "Unilaterale contractie: homolaterale rotatie hoofd. Bilaterale contractie: retroflexie hoofd"
        },
        {
          "name": "m. obliquus capitis inferior",
          "origin": "proc. spinosus axis",
          "insertion": "n. suboccipitalis",
          "innervation": "n. suboccipitalis",
          "function": "Unilaterale contractie: homolaterale rotatie hoofd. Bilaterale contractie: retroflexie hoofd"
        },
        {
          "name": "m. rectus capitis lateralis",
          "origin": "massa lateralis atlantis",
          "insertion": "n. suboccipitalis",
          "innervation": "n. suboccipitalis",
          "function": "Unilaterale contractie: homolaterale FLEXIE hoofd. Bilaterale contractie: HOOFDRECHT HOUDEN"
        }
      ]
    }
  ]
};

// Helper function to get all muscles from the data
export function getAllMuscles(): { muscle: Muscle; sectionTitle: string; subsectionTitle?: string }[] {
  const muscles: { muscle: Muscle; sectionTitle: string; subsectionTitle?: string }[] = [];
  
  anatomyData.sections.forEach(section => {
    // Muscles directly on section
    if (section.muscles) {
      section.muscles.forEach(muscle => {
        muscles.push({ muscle, sectionTitle: section.title });
      });
    }
    
    // Muscles in subsections
    if (section.subsections) {
      section.subsections.forEach(subsection => {
        if (subsection.muscles) {
          subsection.muscles.forEach(muscle => {
            muscles.push({ 
              muscle, 
              sectionTitle: section.title, 
              subsectionTitle: subsection.title 
            });
          });
        }
      });
    }
  });
  
  return muscles;
}

// Get unique sections for filtering
export function getSections(): { id: string; title: string; subsections: { id: string; title: string }[] }[] {
  return anatomyData.sections.map(section => ({
    id: section.id,
    title: section.title,
    subsections: section.subsections?.map(sub => ({ id: sub.id, title: sub.title })) || []
  }));
}

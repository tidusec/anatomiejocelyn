export interface Muscle {
  name: string;
  origin: string;
  insertion: string;
  innervation: string;
  function: string;
}

export interface Structure {
  name: string;
  origin: string;
  course?: string;
  insertion?: string;
  function: string;
  note?: string;
}

export interface Subsection {
  id: string;
  title: string;
  note?: string;
  muscles?: Muscle[];
  structures?: Structure[];
  description?: string;
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
      "title": "DIEPE SCHUINE RUGSPIEREN",
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
              "function": "Elevatie costae (inspiratie) => vergroten van de thoraxholte"
            },
            {
              "name": "m. serratus posterior inferior",
              "origin": "proc. spinosus T11-L2",
              "insertion": "angulus costae rib 9-12",
              "innervation": "Nervi intercostales",
              "function": "Depressie costae (expiratie) => verkleinen van de thoraxholte"
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
              "insertion": "proc. mastoideus os temporalis en linea nuchae",
              "innervation": "Rr. dorsalis nn. spinales cervicales",
              "function": "Unilaterale contractie: Lateroflexie hoofd, Homolaterale rotatie hoofd en nek. Bilaterale contractie: retroflexie hoofd"
            },
            {
              "name": "m. splenius cervicis",
              "origin": "proc. spinosus T1-T6",
              "insertion": "tuberculum posterior (proc. transversus)",
              "innervation": "Rr. dorsalis nn. spinales cervicales",
              "function": "Unilaterale contractie: lateroflexie hoofd. Bilaterale contractie: retroflexie hoofd"
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
              "insertion": "proc. spinosus T6-C6",
              "innervation": "rr. dorsales nn. spinales",
              "function": "Unilaterale contractie: lateroflexie WZ. Bilaterale contractie: retroflexie WZ"
            },
            {
              "name": "m. semispinalis cervicis",
              "origin": "proc. transversus T1-T6",
              "insertion": "proc. spinosus C2-C5",
              "innervation": "rr. dorsales nn. spinales",
              "function": "Unilaterale contractie: Lateroflexie hoofd en nek, Contralaterale rotatie hoofd en nek. Bilaterale contractie: Retroflexie, Extensie hoofd, nek en romp"
            },
            {
              "name": "m. semispinalis capitis",
              "origin": "Proc. transversus T1-T7, Proc. articularis C4-C7",
              "insertion": "linea nuchae",
              "innervation": "rr. dorsales nn. spinales",
              "function": "Unilaterale contractie: heterolaterale torsie hoofd. Bilaterale contractie: retroflexie hoofd"
            },
            {
              "name": "m. multifidus",
              "origin": "Dorsale zijde sacrum, Proc. mamillaris lumbale wervels, Proc. transversus thoracale wervels, Proc. articularis C4-C7",
              "insertion": "proc. spinosus 2-4 hogere wervels",
              "innervation": "rr. dorsales nn. spinales",
              "function": "Unilaterale contractie: homolaterale flexie en torsie wervelzuil. Bilaterale contractie: retroflexie wervelzuil"
            },
            {
              "name": "mm. rotatores",
              "origin": "proc. transversus cervicale en thoracale wervels",
              "insertion": "basis vd proc. spinosus vd bovenliggende wervel",
              "innervation": "rr. dorsales nn. spinales",
              "function": "Wervels draaien rond overlangse as"
            }
          ]
        }
      ]
    },
    {
      "id": "straight_back_muscles",
      "title": "DIEPE RECHTE RUGSPIEREN",
      "subsections": [
        {
          "id": "longer_back_muscles",
          "title": "Lange rechte rugspieren",
          "muscles": [
            {
              "name": "mm. spinales thoracis",
              "origin": "proc. Spinosus T11-L2",
              "insertion": "proc. Spinosus T1-T8",
              "innervation": "rr. dorsalis nn. spinales",
              "function": "Unilaterale contractie: homolaterale flexie wervelzuil. Bilaterale contractie: retroflexie/extensie WZ"
            },
            {
              "name": "mm. spinales capitis",
              "origin": "proc. spinosus C6-T2",
              "insertion": "m. semispinales capitis",
              "innervation": "rr. dorsalis nn. spinales",
              "function": "Unilaterale contractie: homolaterale flexie wervelzuil. Bilaterale contractie: retroflexie/extensie WZ"
            },
            {
              "name": "mm. spinales cervicis",
              "origin": "proc. Spinosus C6-T2",
              "insertion": "proc. Spinosus C2-C4",
              "innervation": "rr. dorsalis nn. spinales",
              "function": "Unilaterale contractie: homolaterale flexie wervelzuil. Bilaterale contractie: retroflexie/extensie WZ"
            }
          ]
        },
        {
          "id": "short_back_muscles",
          "title": "Korte rechte rugspieren",
          "muscles": [
            {
              "name": "mm. intertransversarii lumborum medialis",
              "origin": "proc. mamillaris L1-L5",
              "insertion": "proc. accessorius van de bovenliggende wervel",
              "innervation": "rr. dorsales nn. spinales",
              "function": "Unilaterale contractie: homolaterale flexie. Bilaterale contractie: strekken van de wervelzuil"
            },
            {
              "name": "mm. intertransversarii lumborum lateralis",
              "origin": "proc. costarius L1-L5",
              "insertion": "proc. costarius van de bovenliggende wervel",
              "innervation": "rr. dorsales nn. spinales",
              "function": "Unilaterale contractie: homolaterale flexie. Bilaterale contractie: strekken van de wervelzuil"
            },
            {
              "name": "mm. intertransversarii thoracis",
              "origin": "proc. transversus",
              "insertion": "proc. transversus van de bovenliggende wervel",
              "innervation": "rr. dorsales nn. spinales",
              "function": "Unilaterale contractie: homolaterale flexie. Bilaterale contractie: strekken van de wervelzuil"
            },
            {
              "name": "mm. intertransversarii cervicis anteriores",
              "origin": "tuberculum anterius van de cervicale wervels",
              "insertion": "tuberculum anterius van de bovenliggende wervel",
              "innervation": "rr. dorsales nn. spinales",
              "function": "Unilaterale contractie: homolaterale flexie. Bilaterale contractie: strekken van de wervelzuil"
            },
            {
              "name": "mm. intertransversarii cervicis posteriores",
              "origin": "tuberculum posterius van de cervicale wervels",
              "insertion": "tuberculum posterius van de bovenliggende wervel",
              "innervation": "rr. dorsales nn. spinales",
              "function": "Unilaterale contractie: homolaterale flexie. Bilaterale contractie: strekken van de wervelzuil"
            },
            {
              "name": "mm. interspinales",
              "origin": "proc. spinosus",
              "insertion": "proc. spinosus van de bovenliggende wervel",
              "innervation": "rr. dorsalis nn. spinales",
              "function": "Retroflexie/extensie wervelzuil"
            },
            {
              "name": "mm. levatores costarum",
              "origin": "proc. transversus C7-T11",
              "insertion": "breves = buitenzijde onderliggende rib, longi = buitenzijde rib 2 ribben lager",
              "innervation": "rr. intercostalis 1-11",
              "function": "Lateroflexie wervelzuil. Inspiratie bevorderen (ribben opheffen) = hulpademhalingsspier"
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
          "structures": [
            {
              "name": "Ligamentum iliolumbale",
              "origin": "proc. spinosus T1-L5, sacrum, dorsaal deel van crista iliaca",
              "course": "op de erector spinae, onder m. serratus posterior superior en mm. rhomboidei, gaat over in de fascia nuchae (onder m. trapezius)",
              "insertion": "linea nuchae",
              "function": "Origo van de m. latissimus dorsi en m. gluteus maximus",
              "note": "Ligamentum iliolumbale = oppervlakkig blad van fascia thoracolumbalis"
            },
            {
              "name": "Ligamentum lumbocostale",
              "origin": "proc. costarius L1-L5, onderste rib, crista iliaca",
              "course": "tussen m. quadratus lumborum en m. erector spinae",
              "function": "Origo van m. obliquus abdominis internus en m. transversus abdominis",
              "note": "Ligamentum lumbocostale = diep blad van fascia thoracolumbalis"
            }
          ]
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
          "insertion": "middelste 1/3 van de linea nuchae inf.",
          "innervation": "n. suboccipitalis",
          "function": "Unilaterale contractie: homolaterale rotatie hoofd. Bilaterale contractie: retroflexie hoofd"
        },
        {
          "name": "m. rectus capitis posterior minor",
          "origin": "tuberculum posterior atlantis",
          "insertion": "binnenste 1/3 van de linea nuchae inf.",
          "innervation": "n. suboccipitalis",
          "function": "Unilaterale contractie: homolaterale rotatie hoofd. Bilaterale contractie: retroflexie hoofd"
        },
        {
          "name": "m. obliquus capitis superior",
          "origin": "massa lateralis atlantis",
          "insertion": "linea nuchae inferior boven m. rectus capitis posterior major",
          "innervation": "n. suboccipitalis",
          "function": "Unilaterale contractie: homolaterale rotatie hoofd. Bilaterale contractie: retroflexie hoofd"
        },
        {
          "name": "m. obliquus capitis inferior",
          "origin": "proc. spinosus axis",
          "insertion": "massa lateralis atlantis",
          "innervation": "n. suboccipitalis",
          "function": "Unilaterale contractie: homolaterale rotatie hoofd. Bilaterale contractie: retroflexie hoofd"
        },
        {
          "name": "m. rectus capitis lateralis",
          "origin": "massa lateralis atlantis",
          "insertion": "proc. jugularis ossis occipitalis",
          "innervation": "n. suboccipitalis",
          "function": "Unilaterale contractie: homolaterale FLEXIE hoofd. Bilaterale contractie: HOOFD RECHT HOUDEN"
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
              "origin": "Man: centrum tendineum perinei. Vrouw: centrum tendineum perinei",
              "insertion": "Man: corpora cavernosa (L en R) en corpus spongiosum. Vrouw: dorsale clitoriswand",
              "innervation": "nn. perinealis van n. pudendus",
              "function": "Man: Erectie, Trekt ritmisch samen bij ejalculatie, Evacueert tijdens contractie sperma/urine uit urethra. Vrouw: Afsluiten vaginale opening, Trekt ritmisch samen tijdens orgasme"
            },
            {
              "name": "m. ischiocavernosus",
              "origin": "Man: binnenzijde van tuber ischiadicum en ramus ossis ischii. Vrouw: binnenzijde van tuber ischiadicum en ramus ossis ischii",
              "insertion": "Man: crura. Vrouw: dorsale zijde van clitoris",
              "innervation": "nn. perinealis van n. pudendus",
              "function": "Man: Erectie in stand houden (belemmeren van bloedafvoer uit corpora cavernosa). Vrouw: Clitoriszwelling in stand houden"
            },
            {
              "name": "m. transversus perinei superficialis",
              "origin": "tuber ischiadicum",
              "insertion": "centrum tendineum perinei",
              "innervation": "nn. perinealis van n. pudendus",
              "function": "Stabiliseren van het perineum"
            }
          ]
        },
        {
          "id": "middle_layer",
          "title": "Het midden plan",
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
              "name": "m. sphincter ani (diepe deel)",
              "origin": "Diepe deel van de spier",
              "insertion": "",
              "innervation": "nn. rectales inferiores van n. pudendus",
              "function": "Afsluiten van het anaalkanaal"
            }
          ]
        },
        {
          "id": "deep_layer",
          "title": "Het diepe plan",
          "note": "Vormen diaphragma pelvis omgeven door fascia pelvis visceralis en parietalis",
          "muscles": [
            {
              "name": "m. levator ani",
              "origin": "Os pubis tot spina ischiadica (arcus tendineus)",
              "insertion": "Centrum tendineum perinei, wanden van organen, coccyx",
              "innervation": "r. m. levator ani van n. pudendus",
              "function": "Ondersteuning bekkenorganen, afsluiten bekkenbodem"
            },
            {
              "name": "m. puborectalis",
              "origin": "os pubis (1 cm van symphysis pubis)",
              "insertion": "Voorste vezels: Man: m. levator prostatae, Vrouw: m. pubovaginalis. Middelste vezels: centrum tendineum perinei. Dorsale vezels: dorsale zijde rectum",
              "innervation": "r. m. levator ani van n. pudendus",
              "function": "Anorectale hoek verwekken => faecaal continent"
            },
            {
              "name": "m. pubococcygeus",
              "origin": "os pubis",
              "insertion": "lig. anococcygeum en coccyx",
              "innervation": "r. m. levator ani van n. pudendus",
              "function": "Coccyx oplichten. Verwekt crena ani/aarsgroeve"
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
              "function": "Ondersteunen van de coccyx"
            }
          ]
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

// Get all structures (ligaments, fascia, etc.)
export function getAllStructures(): { structure: Structure; sectionTitle: string; subsectionTitle?: string }[] {
  const structures: { structure: Structure; sectionTitle: string; subsectionTitle?: string }[] = [];
  
  anatomyData.sections.forEach(section => {
    if (section.subsections) {
      section.subsections.forEach(subsection => {
        if (subsection.structures) {
          subsection.structures.forEach(structure => {
            structures.push({ 
              structure, 
              sectionTitle: section.title, 
              subsectionTitle: subsection.title 
            });
          });
        }
      });
    }
  });
  
  return structures;
}

// Get unique sections for filtering
export function getSections(): { id: string; title: string; subsections: { id: string; title: string }[] }[] {
  return anatomyData.sections.map(section => ({
    id: section.id,
    title: section.title,
    subsections: section.subsections?.map(sub => ({ id: sub.id, title: sub.title })) || []
  }));
}

// Get total count of items
export function getTotalCount(): { muscles: number; structures: number } {
  return {
    muscles: getAllMuscles().length,
    structures: getAllStructures().length
  };
}

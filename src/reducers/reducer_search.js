// state is not the application state , but the state the reducer
// is responsible for
export default function(state = null, action) {
  debugger;
  switch(action.type) {
    case 'SEARCH_GROUPS':
      return action.payload;
  }
  return [
    {
      description: 'ת קבוצה זו עוסקת בספורט אתגרי, אם אתה תחר קבוצה זו עוסקת בספורט אתגרי, אם אתה תחרותי ומחפש אתגרים מקומך איתנו',
      groupName: 'הדולפינים',
      groupMoto: 'כל דבר אפשרי אם מאמינים',
      sportType: 'swimming',
      city: 'פרדס חנה',
      ageRange: '20-25',
      ageRange: '20-25',
      groupMaxSize: '50',
      groupCurrentSize: '10',
      rating: 5,
      id: '1'
    },
    {
      description: 'קבוצת חזרה לכושר',
      groupName: 'האריות',
      groupMoto: 'אין דבר העומד בפני הרצון',
      sportType: 'running',
      city: 'קרית אתא',
      ageRange: '20-25',
      groupMaxSize: '50',
      groupCurrentSize: '10',
      rating: 2,
      id: '2'
    },
    {
      description: 'כדורגל של אלופיםת תחרויות ומדליות',
      groupName: 'הפועל חיפה',
      groupMoto: 'מתחילים חזק ומגבירים',
      sportType: 'soccer',
      city: 'כרכור',
      ageRange: '20-25',
      groupMaxSize: '50',
      groupCurrentSize: '10',
      rating: 1,
      id: '3'
    },
    {
      description: 'כדורסל ליגה ב נערים',
      groupName: 'מכבי תל אביב',
      groupMoto: 'כדורסל של אלופים',
      sportType: 'basketball',
      city: 'חדרה',
      ageRange: '20-25',
      groupMaxSize: '50',
      groupCurrentSize: '10',
      rating: 0,
      id: '4'
    },
    {
      description: 'פילאטיס לגוף ולנשמה',
      groupName: 'שלווה ורוגע',
      groupMoto: 'לכל אחד יש שלווה פנימית',
      sportType: 'pilatis',
      city: 'תל אביב',
      ageRange: '20-25',
      groupMaxSize: '50',
      groupCurrentSize: '10',
      rating: 5,
      id: '5'
    },
    {
      description: 'קבוצת יוגה להפגת המתח הנפשי ושחרור הגוף, מעודד את המערכת החיסונית ומחזק את הנפש',
      groupName: 'העין השלישית',
      groupMoto: 'מקשיבים לשקט',
      sportType: 'yoga',
      city: 'קרית ביאליק',
      ageRange: '20-25',
      groupMaxSize: '50',
      groupCurrentSize: '10',
      rating: 3,
      id: '6'
    },
    {
      description: 'הרמת משקולות ופיתוח הגוף',
      groupName: 'כוח מתפרץ',
      groupMoto: 'נפש חזקה בגוף חזק',
      sportType: 'trx',
      city: 'חולון',
      ageRange: '20-25',
      groupMaxSize: '50',
      groupCurrentSize: '10',
      rating: 5,
      id: '7'
    },
    {
      description: 'קבוצת סאפ בים הפתוח',
      groupName: 'סאפ הרצליה',
      groupMoto: 'הים השקט מרגיע את הנפש',
      sportType: 'sap',
      city: 'חולון',
      ageRange: '20-25',
      groupMaxSize: '50',
      groupCurrentSize: '10',
      rating: 5,
      id: '8'
    },
    {
      description: 'קבוצת אופניים',
      groupName: 'רכיבה נתניה',
      groupMoto: 'אין אין על רכיבת אופניים',
      sportType: 'bicycle',
      city: 'חולון',
      ageRange: '20-25',
      groupMaxSize: '50',
      groupCurrentSize: '10',
      rating: 5,
      id: '9'
    },
    {
      description: 'בלט לילדות עד גיל 10',
      groupName: 'בלט נהריה',
      groupMoto: 'בלט',
      sportType: 'ballet',
      city: 'חולון',
      ageRange: '10-5',
      groupMaxSize: '50',
      groupCurrentSize: '10',
      rating: 3,
      id: '10'
    },
    {
      description: 'התעמלות קרקע לבנות',
      groupName: 'התעמלוטיקה',
      groupMoto: 'מגיעים הכי רחוק שאפשר',
      sportType: 'gymnastics',
      city: 'חולון',
      ageRange: '10-15',
      groupMaxSize: '50',
      groupCurrentSize: '10',
      rating: 5,
      id: '11'
    },
    {
      description: 'באולינג למבוגרים',
      groupName: 'קבוצת פינים',
      groupMoto: 'מורידים את כולם',
      sportType: 'bowling',
      city: 'חולון',
      ageRange: '50-60',
      groupMaxSize: '50',
      groupCurrentSize: '10',
      rating: 5,
      id: '12'
    },
    {
      description: 'בייסבול',
      groupName: 'בייסבול',
      groupMoto: 'יאלה בלאגן',
      sportType: 'baseball',
      city: 'חולון',
      ageRange: '10-15',
      groupMaxSize: '25',
      groupCurrentSize: '20',
      rating: 5,
      id: '13'
    },
    {
      description: 'פוטבול',
      groupName: 'פוטבול',
      groupMoto: 'הבסיס הזה שלי',
      sportType: 'football',
      city: 'חולון',
      ageRange: '10-15',
      groupMaxSize: '20',
      groupCurrentSize: '20',
      rating: 5,
      id: '14'
    },
    {
      description: 'כדור נוצה',
      groupName: 'כדור נוצה',
      groupMoto: 'קל כמו נוצה',
      sportType: 'Badminton',
      city: 'חולון',
      ageRange: '10-15',
      groupMaxSize: '50',
      groupCurrentSize: '10',
      rating: 5,
      id: '15'
    }
  ];
}

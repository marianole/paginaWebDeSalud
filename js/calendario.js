$(document).ready(function() {

    $('#calendar').fullCalendar({
	  //defaultDate: moment().format("YYYY-MM-DD"), //Arranca a partir del día actual
      //editable: true,
      //eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'Vacunas Covid',
            url:'listadoDeEnfermedades.html',
          start: '2020-11-18',
            end: '2020-11-20'
        },
		{
          title: 'Vacuna sarampion ',
		  url:'listadoDeEnfermedades.html',
          start: '2020-11-24',
          end: '2020-11-26',
        },
		{
          title: 'Vacunas Covid -(segunda dosis)',
		  url:'listadoDeEnfermedades.html',
          start: '2020-12-04',
          end: '2020-12-06',
        },
		{
          title: 'Vacuna hepatitis B',
		  url:'listadoDeEnfermedades.html',
          start: '2020-12-14',
            end:'2020-12-16'
        },
		   {
          title: 'Vacuna COVID-19 para todos los ciudadanos/as',
            url:'listadoDeEnfermedades.html',
          start: '2021-01-06',
		  end:'2021-01-08',
        },
          {
              title: 'Vacuna Sarampion',
              url: 'listadoDeEnfermedades.html',
              start: '2021-01-25',
              end:'2021-01-27'
          }
      ]
    });

  });

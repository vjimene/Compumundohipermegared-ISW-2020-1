export default function() {
    return [
      {
        subtitle: 'Equipos',
        title: 'Mostrar todos',
        htmlBefore: '<i class="material-icons">view_module</i>',
        to: '/team/teams-list'
      },
      {
        subtitle: 'Equipos',
        title: 'Agregar',
        htmlBefore: '<i class="material-icons">note_add</i>',
        to: '/team/teams-form'
      },
      {
        subtitle: 'Personal de Servicio',
        title: 'Mostrar todos',
        htmlBefore: '<i class="material-icons">view_module</i>',
        to: '/pservice/all-pservice'
      },
      {
        subtitle: 'Personal de Servicio',
        title: 'Agregar',
        htmlBefore: '<i class="material-icons">note_add</i>',
        to: '/pservice/add-new-pservice'
      },
    ];
  }

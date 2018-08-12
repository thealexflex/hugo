// import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { DisplayGrid, GridsterConfig, GridsterItem, GridsterItemComponentInterface, GridType } from 'angular-gridster2';
// // import { AppComponent } from '.././app.component';



// @Component({
//     selector: '',
//     templateUrl: 'dashboard-grid.component.html',
//     styleUrls: ['dashboard-grid.component.css'],
//     changeDetection: ChangeDetectionStrategy.OnPush,
//     encapsulation: ViewEncapsulation.None,
// })

// export class DashboardGridComponent implements OnInit {
//     options: GridsterConfig;
//     dashboard: Array<GridsterItem>;

//     static itemChange(item, itemComponent) {
//         console.info('itemChanged', item, itemComponent);
//     }

//     static itemResize(item, itemComponent) {
//         console.info('itemResized', item, itemComponent);
//     }

//     ngOnInit() {
//         this.options = {
//             gridType: GridType.VerticalFixed,
//             margin: 10,
//             outerMargin: false,
//             outerMarginTop: null,
//             outerMarginRight: null,
//             outerMarginBottom: null,
//             outerMarginLeft: null,
//             mobileBreakpoint: 640,
//             minCols: 8,
//             maxCols: 8,
//             minRows: 4,
//             maxRows: 100,
//             maxItemCols: 8,
//             minItemCols: 1,
//             maxItemRows: 100,
//             minItemRows: 1,
//             maxItemArea: 2500,
//             minItemArea: 1,
//             defaultItemCols: 1,
//             defaultItemRows: 1,
//             fixedColWidth: 160,
//             fixedRowHeight: 100,
//             keepFixedHeightInMobile: false,
//             keepFixedWidthInMobile: false,
//             scrollSensitivity: 10,
//             scrollSpeed: 20,
//             enableEmptyCellClick: false,
//             enableEmptyCellContextMenu: false,
//             enableEmptyCellDrop: false,
//             enableEmptyCellDrag: false,
//             emptyCellDragMaxCols: 50,
//             emptyCellDragMaxRows: 50,
//             ignoreMarginInRow: false,
//             draggable: {
//                 enabled: true,
//             },
//             resizable: {
//                 enabled: true,
//             },
//             swap: false,
//             pushItems: true,
//             disablePushOnDrag: false,
//             disablePushOnResize: false,
//             pushDirections: { north: true, east: true, south: true, west: true },
//             pushResizeItems: false,
//             displayGrid: DisplayGrid.OnDragAndResize,
//             disableWindowResize: false,
//             disableWarnings: false,
//             scrollToNewItems: false
//         };

//         this.dashboard = [
//             { cols: 2, rows: 1, y: 0, x: 0 },
//             { cols: 2, rows: 2, y: 0, x: 2, hasContent: true },
//             { cols: 1, rows: 1, y: 0, x: 4 },
//             { cols: 1, rows: 1, y: 2, x: 5 },
//             { cols: 1, rows: 1, y: 1, x: 0 },
//             { cols: 1, rows: 1, y: 1, x: 0 },
//             { cols: 2, rows: 2, y: 3, x: 5, minItemRows: 2, minItemCols: 2, label: 'Min rows & cols = 2' },
//             { cols: 2, rows: 2, y: 3, x: 0, maxItemRows: 2, maxItemCols: 2, label: 'Max rows & cols = 2' },
//             { cols: 1, rows: 1, y: 2, x: 6 }
//         ];
//     }

//     changedOptions() {
//         if (this.options.api && this.options.api.optionsChanged) {
//             this.options.api.optionsChanged();
//         }
//     }

//     removeItem($event, item) {
//         $event.preventDefault();
//         $event.stopPropagation();
//         this.dashboard.splice(this.dashboard.indexOf(item), 1);
//     }

//     addItem() {
//         this.dashboard.push({ x: 0, y: 0, cols: 1, rows: 1 });
//     }
// }


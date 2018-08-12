import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DisplayGrid, GridsterConfig, GridsterItem, GridsterItemComponentInterface, GridType } from 'angular-gridster2';
import { DashboardGridItemComponent } from './dashboard-grid-item/dashboard-grid-item.component';

// import { AppComponent } from '.././app.component';



@Component({
    selector: '',
    templateUrl: 'dashboard-grid.component.html',
    styleUrls: ['dashboard-grid.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})

export class DashboardGridComponent implements OnInit {
    options: GridsterConfig;
    dashboard: Array<GridsterItem>;


    static itemChange(item, itemComponent) {
        console.log('itemChanged', item, itemComponent);
    }

    static itemResize(item, itemComponent) {
        console.log('itemResized', item, itemComponent);
    }

    ngOnInit() {
        this.options = {
            gridType: GridType.VerticalFixed,
            margin: 10,
            outerMargin: false,
            outerMarginTop: null,
            outerMarginRight: null,
            outerMarginBottom: null,
            outerMarginLeft: null,
            mobileBreakpoint: 640,
            minCols: 8,
            maxCols: 8,
            minRows: 4,
            maxRows: 100,
            maxItemCols: 8,
            minItemCols: 0,
            maxItemRows: 100,
            minItemRows: 0,
            maxItemArea: 2500,
            minItemArea: 0,
            defaultItemCols: 0,
            defaultItemRows: 0,
            fixedColWidth: 160,
            fixedRowHeight: 100,
            keepFixedHeightInMobile: false,
            keepFixedWidthInMobile: false,
            scrollSensitivity: 10,
            scrollSpeed: 20,
            enableEmptyCellClick: false,
            enableEmptyCellContextMenu: false,
            enableEmptyCellDrop: false,
            enableEmptyCellDrag: false,
            emptyCellDragMaxCols: 50,
            emptyCellDragMaxRows: 50,
            ignoreMarginInRow: false,
            draggable: {
                enabled: true,
            },
            resizable: {
                enabled: true,
            },
            swap: false,
            pushItems: true,
            disablePushOnDrag: false,
            disablePushOnResize: false,
            pushDirections: { north: true, east: true, south: true, west: true },
            pushResizeItems: false,
            displayGrid: DisplayGrid.OnDragAndResize,
            disableWindowResize: false,
            disableWarnings: false,
            scrollToNewItems: false
        };

        this.dashboard = []
        //     {
        //         // minItemCols: 0,
        //         // maxItemCols: 100,
        //         // maxItemRows: 100,
        //         // minItemRows: 0,
        //         // minItemArea: 0,
        //         // maxItemArea: 2500,
        //         // dragEnabled: true,
        //         // resizeEnabled: true,
        //         compactEnabled: true
        //     },
        //     { cols: 2, rows: 4, y: 0, x: 0 },
        //     { cols: 2, rows: 2, y: 0, x: 2 }
        // ];


    }

    testClicked1() {

        var $randommath1 = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        var $randommath2 = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

        //    This will be pulled from DB
        this.dashboard = [
            { cols: 4, rows: 4, y: 0, x: 4, id: $randommath1 },
            { cols: 2, rows: 2, y: 4, x: 2, id: $randommath2 }
        ]
        // console.log(this.id);
    }
    testClicked2() {
        var $randommath1 = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        var $randommath2 = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        this.dashboard = [
            { cols: 2, rows: 4, y: 0, x: 0, id: $randommath1 },
            { cols: 2, rows: 4, y: 0, x: 2, id: $randommath2 }
        ]
        console.log(this);
    }
    testClicked3() {
        var $randommath1 = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        var $randommath2 = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        this.dashboard = [
            { cols: 1, rows: 4, y: 2, x: 0, id: $randommath1 },
            { cols: 1, rows: 2, y: 0, x: 1, id: $randommath2 }
        ]
        console.log(this);
    }

    changedOptions() {
        if (this.options.api && this.options.api.optionsChanged) {
            this.options.api.optionsChanged();

        }
    }

    removeItem($event, $item) {
        $event.preventDefault();
        $event.stopPropagation();
        this.dashboard.splice(this.dashboard.indexOf($item), 1);
        console.log(this);
    }


    addItemClicked($name) {


        // var itemName: string = $name
        var $randommath = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        console.log($name, $randommath);
        this.dashboard.push({ x: 0, y: 0, cols: 2, rows: 1, id: $randommath });

        // this.dashboard.push({ x: 0, y: 0, cols: 1, rows: 1, id: $randommath, content: "Some content" });


    }


};



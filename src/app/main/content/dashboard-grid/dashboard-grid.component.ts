import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DisplayGrid, GridsterConfig, GridsterItem, GridsterItemComponentInterface, GridType } from 'angular-gridster2';


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

        var $randommath = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);


        //    This will be pulled from DB
        this.dashboard = [
            { x: 0, y: 0, cols: 1, rows: 1, type: '2', id: $randommath, class: "bgblue" },
            { x: 2, y: 2, cols: 3, rows: 3, type: '1', id: $randommath, class: "bgred" }
        ]
        // console.log(this.id);
    }
    testClicked2() {
        var $randommath = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

        this.dashboard = [
            { x: 3, y: 3, cols: 1, rows: 1, type: '2', id: $randommath, class: "bgred" },
            { x: 5, y: 5, cols: 3, rows: 3, type: '3', id: $randommath, class: "bgblue" }
        ]
        console.log(this);
    }
    testClicked3() {
        var $randommath = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        this.dashboard = [
            {
                "x": 0,
                "y": 0,
                "cols": 1,
                "rows": 2,
                "type": "2",
                "id": "a76wycr7g7c29v4m8xryg3",
                "class": "bgblue"
            },
            {
                "x": 1,
                "y": 0,
                "cols": 1,
                "rows": 2,
                "type": "5",
                "id": "a76wycr7g7c29v4m8xryg3",
                "class": "bgred"
            },
            {
                "x": 2,
                "y": 2,
                "cols": 3,
                "rows": 1,
                "type": "6",
                "id": "a76wycr7g7c29v4m8xryg3",
                "class": "bgblue"
            },
            {
                "x": 2,
                "y": 0,
                "cols": 1,
                "rows": 2,
                "type": "1",
                "id": "y1qm1i244s0f4tozo8ds3ehurqpcok3z3yfp782jn",
                "class": "bgred"
            },
            {
                "x": 3,
                "y": 0,
                "cols": 1,
                "rows": 2,
                "type": "1",
                "id": "ynquznlpwibgupaby61s5gp45is9eamr8tdewv38u75",
                "class": "bgred"
            },
            {
                "x": 4,
                "y": 0,
                "cols": 2,
                "rows": 2,
                "type": "1",
                "id": "uk95wxdd7fmqc2169qrinohyapxphpkuc5q78jeo43fy",
                "class": "bgyellow"
            },
            {
                "x": 6,
                "y": 0,
                "cols": 2,
                "rows": 2,
                "type": "1",
                "id": "27kkcgkql3wn21zd3lj1otgdaplsfwiluxv4avjwcx",
                "class": "bgblue"
            },
            {
                "x": 0,
                "y": 2,
                "cols": 1,
                "rows": 1,
                "type": "1",
                "id": "0gzk3oizhh1m2zirdpmzarqlpur0dtmnbukwkppj31s",
                "class": "bgred"
            },
            {
                "x": 7,
                "y": 2,
                "cols": 1,
                "rows": 1,
                "type": "1",
                "id": "3f3zv1n1vfa73pp9pxk2rf55sl6qzhx12h8z4sy7hm5",
                "class": "bgred"
            },
            {
                "x": 1,
                "y": 2,
                "cols": 1,
                "rows": 1,
                "type": "1",
                "id": "32zga0a8zgrc5oxv7smfzgjagncy4dcwmg4hkco0cp",
                "class": "bgyellow"
            },
            {
                "x": 5,
                "y": 2,
                "cols": 2,
                "rows": 1,
                "type": "1",
                "id": "60bnsjbmj9gduao8r2abx457zbcl5rxctu5q30t52vn",
                "class": "bgred"
            },
            {
                "x": 0,
                "y": 3,
                "cols": 1,
                "rows": 1,
                "type": "1",
                "id": "qa5f7hoyg0cznx2k3d7fu7tgbf6sxxzkx0fu6j44w58",
                "class": "bgred"
            }
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
        var $randommath = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        // console.log($name, $randommath);
        // this.dashboard.push({ x: 0, y: 0, cols: 2, rows: 2, id: $randommath });

        // console.log($name);
        if ($name == 1) {
            this.dashboard.push({ x: 0, y: 0, cols: 2, rows: 2, type: '1', id: $randommath, class: "bgred" })
        } else {
            this.dashboard.push({ x: 0, y: 0, cols: 3, rows: 3, type: '2', id: $randommath, class: "bgblue" })
        };



        // this.dashboard.push({ x: 0, y: 0, cols: 1, rows: 1, id: $randommath, content: "Some content" });


    }



};



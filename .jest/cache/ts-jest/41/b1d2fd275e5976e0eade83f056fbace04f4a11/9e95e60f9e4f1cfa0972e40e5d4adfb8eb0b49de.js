"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const prop_types_1 = __importDefault(require("prop-types"));
class DropZone extends react_1.Component {
    constructor(props) {
        super(props);
        this.displayName = 'DropZone';
        this._timer = this.state = {};
        this.reportMeasurements = this.reportMeasurements.bind(this);
        this.onEnter = this.onEnter.bind(this);
        this.onLeave = this.onLeave.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }
    reportMeasurements() {
        if (this.props.dragging)
            this.context.dragContext.removeZone(this.refs.wrapper);
        this.wrapper.measure((_, __, width, height, x, y) => {
            if (!this.props.dragging)
                this.context.dragContext.updateZone({
                    width,
                    height,
                    x,
                    y,
                    ref: this.refs.wrapper,
                    onEnter: this.onEnter,
                    onLeave: this.onLeave,
                    onDrop: this.onDrop
                });
        });
    }
    componentDidMount() {
        this.reportMeasurements();
        this._timer = setInterval(this.reportMeasurements, 1000);
    }
    componentWillUnmount() {
        this.context.dragContext.removeZone(this.refs.wrapper);
        clearInterval(this._timer);
    }
    componentDidUpdate() {
        this.reportMeasurements();
    }
    onEnter({ x, y }) {
        if (this.props.disabled)
            return;
        if (!this.state.active) {
            if (this.props.onEnter)
                this.props.onEnter();
            this.setState({
                active: true
            });
        }
    }
    onLeave() {
        if (this.props.disabled)
            return;
        if (this.state.active) {
            if (this.props.onLeave)
                this.props.onLeave();
            this.setState({
                active: false
            });
        }
    }
    onDrop(data) {
        if (this.props.disabled)
            return;
        if (this.props.onDrop)
            this.props.onDrop(data);
        this.setState({
            active: false
        });
    }
    render() {
        return (react_1.default.createElement(react_native_1.View, { style: this.props.style, pointerEvents: this.props.pointerEvents, onLayout: this.reportMeasurements, ref: 'wrapper' }, react_1.default.Children.map(this.props.children, child => {
            if (react_1.default.isValidElement(child)) {
                return react_1.default.cloneElement(child, Object.assign({}, this.props, { dragOver: this.state.active }));
            }
        })));
    }
}
DropZone.propTypes = {
    onEnter: prop_types_1.default.func,
    onLeave: prop_types_1.default.func,
    onDrop: prop_types_1.default.func
};
DropZone.contextTypes = {
    dragContext: prop_types_1.default.any
};
exports.default = DropZone;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2FvNjAvRGVza3RvcC9Xb3JrRmlsZXMvV29ya2xpbmtEZW1vL3NyYy9SZWFjdC91dGlscy9yZWFjdC1uYXRpdmUtZHJhZy1kcm9wL0Ryb3Bab25lLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBeUM7QUFDekMsK0NBQXNEO0FBQ3RELDREQUFtQztBQWlCbkMsY0FBZSxTQUFRLGlCQUE4QjtJQUluRCxZQUFZLEtBQXFCO1FBQy9CLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FDbEIsQ0FDRSxDQUFTLEVBQ1QsRUFBVSxFQUNWLEtBQWEsRUFDYixNQUFjLEVBQ2QsQ0FBUyxFQUNULENBQVMsRUFDVCxFQUFFO1lBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMs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LEVBQUUsQ0FBQyxDQUMvRCxDQUFDO2FBQ0g7UUFDSCxDQUFDLENBQUMsQ0FDRyxDQUNSLENBQUM7SUFDSixDQUFDOztBQXJFTSxrQkFBUyxHQUFHO0lBQ2pCLE9BQU8sRUFBRSxvQkFBUyxDQUFDLElBQUk7SUFDdkIsT0FBTyxFQUFFLG9CQUFTLENBQUMsSUFBSTtJQUN2QixNQUFNLEVBQUUsb0JBQVMsQ0FBQyxJQUFJO0NBQ3ZCLENBQUM7QUEyQ0sscUJBQVksR0FBRztJQUNwQixXQUFXLEVBQUUsb0JBQVMsQ0FBQyxHQUFHO0NBQzNCLENBQUM7QUF1Qkosa0JBQWUsUUFBUSxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbzYwL0Rlc2t0b3AvV29ya0ZpbGVzL1dvcmtsaW5rRGVtby9zcmMvUmVhY3QvdXRpbHMvcmVhY3QtbmF0aXZlLWRyYWctZHJvcC9Ecm9wWm9uZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFZpZXcsIFRvdWNoYWJsZU9wYWNpdHkgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW50ZXJmYWNlIElEcm9wWm9uZVByb3BzIHtcbiAgb25Ecm9wOiAoZGF0YTogYW55KSA9PiBhbnk7XG4gIG9uTGVhdmU6ICgpID0+IGFueTtcbiAgb25FbnRlcjogKCkgPT4gYW55O1xuICBzdHlsZTogYW55O1xuICBkcmFnZ2luZzogKCkgPT4gYW55O1xuICBtZWFzdXJlOiAoKSA9PiBhbnk7XG4gIGRpc2FibGVkOiAoKSA9PiBhbnk7XG4gIHBvaW50ZXJFdmVudHM6IGFueTtcbn1cbmludGVyZmFjZSBJUG9zaXRpb24ge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbn1cblxuY2xhc3MgRHJvcFpvbmUgZXh0ZW5kcyBDb21wb25lbnQ8SURyb3Bab25lUHJvcHMsIGFueT4ge1xuICBkaXNwbGF5TmFtZTogc3RyaW5nO1xuICB3cmFwcGVyOiBhbnk7XG4gIHByaXZhdGUgX3RpbWVyOiBhbnk7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJRHJvcFpvbmVQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmRpc3BsYXlOYW1lID0gJ0Ryb3Bab25lJztcbiAgICB0aGlzLl90aW1lciA9IHRoaXMuc3RhdGUgPSB7fTtcbiAgICB0aGlzLnJlcG9ydE1lYXN1cmVtZW50cyA9IHRoaXMucmVwb3J0TWVhc3VyZW1lbnRzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkVudGVyID0gdGhpcy5vbkVudGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkxlYXZlID0gdGhpcy5vbkxlYXZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkRyb3AgPSB0aGlzLm9uRHJvcC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVwb3J0TWVhc3VyZW1lbnRzKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmRyYWdnaW5nKVxuICAgICAgdGhpcy5jb250ZXh0LmRyYWdDb250ZXh0LnJlbW92ZVpvbmUodGhpcy5yZWZzLndyYXBwZXIpO1xuICAgIHRoaXMud3JhcHBlci5tZWFzdXJlKFxuICAgICAgKFxuICAgICAgICBfOiBudW1iZXIsXG4gICAgICAgIF9fOiBudW1iZXIsXG4gICAgICAgIHdpZHRoOiBudW1iZXIsXG4gICAgICAgIGhlaWdodDogbnVtYmVyLFxuICAgICAgICB4OiBudW1iZXIsXG4gICAgICAgIHk6IG51bWJlclxuICAgICAgKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5kcmFnZ2luZylcbiAgICAgICAgICB0aGlzLmNvbnRleHQuZHJhZ0NvbnRleHQudXBkYXRlWm9uZSh7XG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5LFxuICAgICAgICAgICAgcmVmOiB0aGlzLnJlZnMud3JhcHBlcixcbiAgICAgICAgICAgIG9uRW50ZXI6IHRoaXMub25FbnRlcixcbiAgICAgICAgICAgIG9uTGVhdmU6IHRoaXMub25MZWF2ZSxcbiAgICAgICAgICAgIG9uRHJvcDogdGhpcy5vbkRyb3BcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkRyb3A6IFByb3BUeXBlcy5mdW5jXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5yZXBvcnRNZWFzdXJlbWVudHMoKTtcbiAgICB0aGlzLl90aW1lciA9IHNldEludGVydmFsKHRoaXMucmVwb3J0TWVhc3VyZW1lbnRzLCAxMDAwKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuY29udGV4dC5kcmFnQ29udGV4dC5yZW1vdmVab25lKHRoaXMucmVmcy53cmFwcGVyKTtcbiAgICBjbGVhckludGVydmFsKHRoaXMuX3RpbWVyKTtcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5yZXBvcnRNZWFzdXJlbWVudHMoKTtcbiAgfVxuXG4gIG9uRW50ZXIoeyB4LCB5IH06IElQb3NpdGlvbikge1xuICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkKSByZXR1cm47XG4gICAgaWYgKCF0aGlzLnN0YXRlLmFjdGl2ZSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25FbnRlcikgdGhpcy5wcm9wcy5vbkVudGVyKCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWN0aXZlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvbkxlYXZlKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkKSByZXR1cm47XG4gICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZlKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkxlYXZlKSB0aGlzLnByb3BzLm9uTGVhdmUoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvbkRyb3AoZGF0YTogYW55KSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHJldHVybjtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkRyb3ApIHRoaXMucHJvcHMub25Ecm9wKGRhdGEpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlOiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICBkcmFnQ29udGV4dDogUHJvcFR5cGVzLmFueVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFZpZXdcbiAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XG4gICAgICAgIHBvaW50ZXJFdmVudHM9e3RoaXMucHJvcHMucG9pbnRlckV2ZW50c31cbiAgICAgICAgb25MYXlvdXQ9e3RoaXMucmVwb3J0TWVhc3VyZW1lbnRzfVxuICAgICAgICByZWY9eyd3cmFwcGVyJ31cbiAgICAgID5cbiAgICAgICAge1JlYWN0LkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgICAgICAgaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChcbiAgICAgICAgICAgICAgY2hpbGQgYXMgUmVhY3QuUmVhY3RFbGVtZW50PGFueT4sXG4gICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMsIHsgZHJhZ092ZXI6IHRoaXMuc3RhdGUuYWN0aXZlIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSl9XG4gICAgICA8L1ZpZXc+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wWm9uZTtcbiJdLCJ2ZXJzaW9uIjozfQ==
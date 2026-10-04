public class Solution {
    public int Trap(int[] height) {
        // find lmax and rmax
        var curmax = -1;
        var lmax = new int[height.Length];
        var rmax = new int[height.Length];

        for(int i=0; i<height.Length; i++){
            curmax = Math.Max(height[i], curmax);
            lmax[i] = curmax;
        }

        curmax = -1;
        for(int i=height.Length-1; i>= 0; i--){
            curmax = Math.Max(height[i], curmax);
            rmax[i] = curmax;
        }

        // calculating the water

        int water = 0;

        for(int i=0; i<height.Length; i++){
            water += Math.Min(lmax[i], rmax[i]) - height[i];
        }

        // return water;
        return water;
    }
}